import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectoption, addfield } from '../redux/action';

const Addfield = ({ selectedoption, fields, selectoption, addfield})=>{
    const [formdata, setformdata]=useState({});
    const[fieldcount,setfieldcount]=useState(0);
    const handleoptionchange=(e)=>{
    const selectedoption =e.target.value;
    selectoption(selectedoption);
    setformdata({});
    setfieldcount(0);
};
const handleAddField = () => {
    if (fieldcount < 4) {
      const newfieldId = `field-${fieldcount}`;
      const selectedField = fields[selectedoption][fieldcount];
      if (selectedField.validation && !selectedField.validation(formdata[selectedField.id])) {
        alert('Validation failed. Please check your input.');
        return;
      }
      addfield({
        type: selectedoption,
        id: newfieldId,
        name: `Field ${fieldcount + 1}`,
        validation: selectedField.validation || (() => true), // Provide a default validation function if not defined
        data: selectedField.data || [], // Additional property for dropdown options
        placeholder: selectedField.placeholder || '', // Additional property for text input placeholder
        style: selectedField.style || {}, // Additional property for styling
        ariaLabel: selectedField.ariaLabel || '',
        });
    
    setfieldcount(fieldcount + 1);
  } else {
    alert('You cannot add more than 4 fields.');
  }
};
const handlefieldchange=(fieldId,value)=>{
    setformdata((prevdata)=>({
        ...prevdata,
        [fieldId]:value,
    }));
};


const handleFormSubmit=(e)=>{
    e.prevenetDefault();
    // const isFormValid = fields[selectedOption].every((field) => {
    //     if (field.validation) {
    //       return field.validation(formData[field.id]);
    //     }
    //     return true;
    //   });
    if(selectedoption==='Student'){
                if(!formdata.name || !formdata.age){
                alert('Please enter name and age.');
                return;
            }
        }
    else if(selectedoption==='Self-Employee'){
            if(!formdata.company || !formdata.salary){
                alert('Please enter business name and number of Employees.');
                    return;
                }
            }
        
    else if(selectedoption==='Business'){
            if(!formdata.businessname || !formdata.numEmployees){
                alert('Please enter business name and number of employees.')
                return;
            }
        }
        addfield({type: selectedoption,data:formdata});
        setformdata({});
        setfieldcount(0);
    }


return (
    <div>
        <h2> Add Fields </h2>
        <form onSubmit={handleFormSubmit}>
            <label>
                Select Option:
                <select value={selectedoption} onChange={handleoptionchange}>
                    <option value="Student">Student</option>
                    <option value="Self_Employee">Self-Employee</option>
                    <option value="Business">Business</option>
                </select>
            </label>
            {selectedoption && fields[selectedoption] && (
                fields[selectedoption].map((Fields)=>(
                    <div key={fields.id}>
                        <label>{fields.name}:</label>
                        {fields.type === 'text' && (
                        <input 
                            type="text"
                            value={FormData[fields.id] || ''}
                            onChange={(e)=>handlefieldchange(fields.id,e.target.value)}
                            required={fields.required}/>
                        )}
                        {fields.type === 'dropdown' && (
                        <select
                            value={FormData[fields.id] || ''}
                            onChange={(e) => handlefieldchange(fields.id, e.target.value)}
                            required={fields.required}
                            >
                        {/* ... Options for the dropdown */}
                        </select>
                        )}
                        {fields.type === 'date' && (
                        <input
                            type="date"
                            value={FormData[fields.id] || ''}
                            onChange={(e) => handlefieldchange(fields.id, e.target.value)}
                            required={fields.required}/>
                        )}
                    </div>
                ))
            )}
            <button type="button" onClick={handleAddField}>
                Add Field
            </button>
            <button type="submit">Submit</button>
        </form>
    </div>
);
};
const mapstatetoprops=(state)=>({
    selectedoption:state.selectedoption,
    fields:state.fields,
});
export default connect(mapstatetoprops,{selectoption,addfield})(Addfield);
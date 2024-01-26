import React from 'react'
import { connect } from 'react-redux'
const displayfields= ({ fields } )=> {
  return (
    <div>
      <h2>Display Fields</h2>
      {Object.keys(fields).map((type)=>(
        <div key={type}>
            <h3>{type}</h3>
            {fields[type].map((field)=>(
               <div key={field.id}>
                <string>{field.label}:</string>{field.data}
                </div> 
            ))}
        </div>
      ))}
    </div>
  );
};
const mapstatetoprops=(state)=>({
    fields:state.fields,
});
export default connect(mapstatetoprops)(displayfields);

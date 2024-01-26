import { combineReducers } from "redux";
const selectoptionreducer=(state=null,action) => {
    return state;
};

const fieldsreducer=(state=[],action)=>{
    return state;
};

const rootReducer=combineReducers({
    selectedoption:selectoptionreducer,
    fields:fieldsreducer,
});

export default rootReducer;
export const SELECT_OPTION='SELECT_OPTION';
export const ADD_FIELD='ADD_FIELD';
export const REMOVE_FIELD='REMOVE_FIELD';

export const selectoption=(option)=>({
    type:SELECT_OPTION,
    payload:option,
});

export const addfield=(field)=>({
    type:ADD_FIELD,
    payload:field,
});

export const removefield=(fieldId)=>({
    type:REMOVE_FIELD,
    payload:fieldId,
});


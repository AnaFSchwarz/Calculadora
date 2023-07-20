import { ADDHISTORICO, REMOVE } from './Types';
import {combineReducers } from 'redux';

//Reducer
const initialState = {
    historico: []
};
 
const index = (State = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case ADDHISTORICO:         
        console.log(action.payload)
            return {
            ...State,
            historico: [...State.historico, payload]} 
        case REMOVE:  
        console.log(action.payload)
                return {
                    historico: [...State.historico.filter((id) => id.id !== action.payload.id)]}
        default: return State
    }
}

export const Reducers = combineReducers({ index });
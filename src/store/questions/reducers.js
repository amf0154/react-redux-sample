import { GET_QUESTIONS_DATA, CHANGE_QUESTIONS_DATA } from "../constants";

const defaultState = {};
export const questionsReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_QUESTIONS_DATA:
            return { 
                ...state, 
                ...action.payload.questions
            }
        case CHANGE_QUESTIONS_DATA:
            return {
                ...state, 
                ...action.payload.questions
            }    
            default: 
            return state;    
    }
}
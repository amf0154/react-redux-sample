import { GET_TEST_DATA } from "../constants";

const defaultState = {}

export const testReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_TEST_DATA:
            return {
                ...state, 
                test: {data: 0}
            }   
        default: return state;       
    }
}
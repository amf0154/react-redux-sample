import { CHANGE_PAGE_QUESTIONS } from "../constants";

const defaultState = {currentPage: 1}

export const paginationReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_PAGE_QUESTIONS:
            return {
                ...action.payload
            }   
        default: return state;       
    }
}
import { combineReducers } from "redux";
import { questionsReducer } from "./questions/reducers";
import { testReducer } from "./test/reducers";

export default combineReducers({
    questions: questionsReducer,
    test: testReducer
})
import { GET_QUESTIONS_DATA } from "../constants";
import Requests from '../../api/requests';
export const actionQuestions = (data) => {
    return {
        type: GET_QUESTIONS_DATA,
        payload: {
            questions: data
        }
    }
  }

  export function loadQuestions() {
    return (dispatch) => {
      return Requests.getQuestions().then(data => {
        dispatch(actionQuestions(data));
      }).catch(error => {
        console.error(error);
      });
    }
  }

  export function loadQuestions2() {
    return actionQuestions({blob: "cool"});
  }
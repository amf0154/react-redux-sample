import { CHANGE_PAGE_QUESTIONS } from "../constants";
import Requests from '../../api/requests';
import { actionQuestions} from '../questions/actions';

export const actionSetPageQuestions = (page) => {
    return {
        type: CHANGE_PAGE_QUESTIONS,
        payload:{
            currentPage: page
        }
    }
  }

  export function loadQuestionsByPage(page = 1) {
    return (dispatch) => {
      return Requests.getQuestionsByPage(page).then(data => {
        dispatch(actionSetPageQuestions(page));
        dispatch(actionQuestions(data));
      }).catch(error => {
        console.error(error);
      });
    }
  }
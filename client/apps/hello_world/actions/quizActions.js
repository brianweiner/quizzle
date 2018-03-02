import quizApi from '../api/quizApi';
import * as types from './actionTypes';

export function loadQuiz() {
  return function(dispatch) {
    return quizApi.getQuiz().then(quiz => {
      dispatch(loadQuizSuccess(quiz));
    }).catch(error => {
      throw(error);
    })
  }
}

export function loadQuizSuccess(quiz) {
  return { type: types.LOAD_QUIZ_SUCCESS, quiz };
}

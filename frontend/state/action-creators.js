import axios from 'axios';

export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'

export const moveClockwise = () => ({
  type: MOVE_CLOCKWISE,
});

export const moveCounterClockwise = () => ({
  type: MOVE_COUNTERCLOCKWISE,
});

export const selectAnswer = (answer) => ({
  type: SET_SELECTED_ANSWER,
  payload: answer,
});

export const setMessage = (message) => ({
  type: SET_INFO_MESSAGE,
  payload: message,
});

export const setQuiz = (quiz) => ({
  type: SET_QUIZ_INTO_STATE,
  payload: quiz,
});

export const inputChange = (input) => ({
  type: INPUT_CHANGE,
  payload: input,
});

export const resetForm = () => ({
  type: RESET_FORM,
});


export function fetchQuiz() {
  return function (dispatch) {
    const localQuiz = localStorage.getItem('quiz');
    if (localQuiz) {
      dispatch(setQuiz(JSON.parse(localQuiz)));
    } else {
      axios.get('http://localhost:9000/api/quiz/next')
        .then(response => {
          localStorage.setItem('quiz', JSON.stringify(response.data));
          dispatch(setQuiz(response.data));
        })
        .catch(error => {
          console.error(error);
          dispatch(setMessage());
        });
    }
  }
}

export function postAnswer(answer, quiz_id) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {
      answer_id: answer.answer_id,
      quiz_id: quiz_id,
    })
      .then(response => {
        if (response.data.message === "Nice job! That was the correct answer") {
          dispatch(setMessage(response.data.message));
        } else {
          dispatch(setMessage(response.data.message));
        }
        localStorage.removeItem('quiz');
        dispatch(fetchQuiz());
      })
      .catch(error => {
        console.error(error);
        dispatch(setMessage('There was an error with your request'));
      });
  }
}

export function postQuiz(quiz) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {
      question_text: quiz.newQuestion,
      true_answer_text: quiz.newTrueAnswer,
      false_answer_text: quiz.newFalseAnswer,
    })
      .then(response => {
        console.log(response)
        dispatch(setQuiz(response.data));
        dispatch(setMessage(`Congrats: "${response.data.question}" is a great question!`))
        dispatch(resetForm())
      })
      .catch(error => {
        console.error(error);
        dispatch(setMessage(error.message));
        dispatch(resetForm())
      });
  }
}
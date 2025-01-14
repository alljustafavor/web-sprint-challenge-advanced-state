// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

import { INPUT_CHANGE, SET_SELECTED_ANSWER, MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, RESET_FORM } from './action-creators'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return state === 5 ? 0 : state + 1
    case MOVE_COUNTERCLOCKWISE:
      return state === 0 ? 5 : state - 1
    default:
      return (state)
  }
}
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}
const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
  if (action.payload) {
    return {
      ...state,
      newQuestion: action.payload.newQuestion,
      newTrueAnswer: action.payload.newTrueAnswer,
      newFalseAnswer: action.payload.newFalseAnswer
    }
  } else {
    return state;
  }
    case INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      }
    case RESET_FORM:
      return initialFormState;
    default:
      return (state)
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

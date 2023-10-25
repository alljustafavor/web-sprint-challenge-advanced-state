import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postQuiz, resetForm, inputChange } from '../state/action-creators'

export function Form(props) {
  const { postQuiz, inputChange, newQuestion, newTrueAnswer, newFalseAnswer } = props;


  const onChange = evt => {
    switch (evt.target.id) {
      case 'newQuestion':
        inputChange({ newQuestion: evt.target.value });
        break;
      case 'newTrueAnswer':
        inputChange({ newTrueAnswer: evt.target.value });
        break;
      case 'newFalseAnswer':
        inputChange({ newFalseAnswer: evt.target.value });
        break;
      default:
        break;
    }
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({
      newQuestion,
      newTrueAnswer,
      newFalseAnswer,
    });
    resetForm();
  }

  const isDisabled = () => {
    return !(newQuestion?.trim() && newTrueAnswer?.trim() && newFalseAnswer?.trim());
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isDisabled()}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}
export default connect(mapStateToProps, { postQuiz, resetForm, inputChange })(Form)

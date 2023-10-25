import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postQuiz, resetForm, inputChange } from '../state/action-creators'

export function Form(props) {
  const { postQuiz, inputChange } = props;

  const [newQuestion, setNewQuestion] = useState('');
  const [newTrueAnswer, setNewTrueAnswer] = useState('');
  const [newFalseAnswer, setNewFalseAnswer] = useState('');

  const onChange = evt => {
    switch (evt.target.id) {
      case 'newQuestion':
        inputChange({ newQuestion: evt.target.value });
        setNewQuestion(evt.target.value);
        break;
      case 'newTrueAnswer':
        inputChange({ newTrueAnswer: evt.target.value });
        setNewTrueAnswer(evt.target.value);
        break;
      case 'newFalseAnswer':
        inputChange({ newFalseAnswer: evt.target.value });
        setNewFalseAnswer(evt.target.value);
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
    setNewQuestion('')
    setNewFalseAnswer('')
    setNewTrueAnswer('')
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={!newQuestion.trim() || !newTrueAnswer.trim() || !newFalseAnswer.trim()}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.newQuestion,
    newTrueAnswer: state.newTrueAnswer,
    newFalseAnswer: state.newFalseAnswer
  }
}

export default connect(mapStateToProps, { postQuiz, resetForm, inputChange })(Form)

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQuiz, postAnswer, selectAnswer } from '../state/action-creators'

export default function Quiz() {
  const dispatch = useDispatch()

  const selectedAnswer = useSelector(state => state.selectedAnswer)
  const quiz = useSelector(state => state.quiz);

  React.useEffect(() => {
    dispatch(fetchQuiz())
  }, [dispatch])

  const handleSelectAnswer = (answer) => {
    dispatch(selectAnswer(answer))
  }

  const handleSubmitAnswer = () => {
    dispatch(postAnswer(selectedAnswer, quiz.quiz_id));
  }

  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              {quiz.answers.map((answer, index) => (
                <div key={index} className={`answer ${selectedAnswer === answer ? 'selected' : ''}`}>
                  {answer.text}
                  <button onClick={() => handleSelectAnswer(answer)}>
                    {selectedAnswer === answer ? 'SELECTED' : 'Select'}
                  </button>
                </div>
              ))}

              <button id="submitAnswerBtn" onClick={handleSubmitAnswer} disabled={!selectedAnswer}>Submit answer</button>

            </div>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
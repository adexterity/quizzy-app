import React from 'react'
import Options from './Options'

const QuestionReact = ({questionReact, dispatch, answer}) => {
  console.log(questionReact)
  return (
    <div>
      <h2>{questionReact.question}</h2>
     
      <div className='options'>
        <Options question ={questionReact} dispatch={dispatch} answer = {answer} />
      </div>
      
      
    </div>
  )
}

export default QuestionReact;

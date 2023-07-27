import React from 'react'
import Options from './Options'

const QuestionJavascript = ({questionJavascript, dispatch, answer}) => {
//   console.log(questionCss)
  return (
    <div>
      <h2>{questionJavascript.question}</h2>
     
      <div className='options'>
        <Options question ={questionJavascript} dispatch={dispatch} answer = {answer} />
      </div>
      
      
    </div>
  )
}

export default QuestionJavascript;

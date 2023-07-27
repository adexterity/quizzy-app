import React from 'react'
import Options from './Options'

const QuestionCSS = ({questionCss, dispatch, answer}) => {
//   console.log(questionCss)
  return (
    <div>
      <h2>{questionCss.question}</h2>
     
      <div className='options'>
        <Options question ={questionCss} dispatch={dispatch} answer = {answer} />
      </div>
      
      
    </div>
  )
}

export default QuestionCSS;

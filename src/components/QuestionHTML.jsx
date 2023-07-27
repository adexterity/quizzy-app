import React from 'react'
import Options from './Options';

const QuestionHTML = ({questionHtml, dispatch, answer}) => {
  // console.log(questionHTML)
  return (
    <div>
      <h2>{questionHtml.question}</h2>
     
      <div className='options'>
        <Options question ={questionHtml} dispatch={dispatch} answer = {answer} />
      </div>
      
      
    </div>
  )
}

export default QuestionHTML;

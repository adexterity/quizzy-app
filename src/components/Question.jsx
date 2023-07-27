import React from 'react';
import Options from './Options';

const Question = ({questions, dispatch, answer}) => {
  // console.log(questions)
  return (
    <div>
      <h2>{questions.question}</h2>
     
      <div className='options'>
        <Options question ={questions} dispatch={dispatch} answer = {answer} />
      </div>
      
      
    </div>
  )
}

export default Question;

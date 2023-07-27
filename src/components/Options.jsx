import React from 'react'

const Options = ({question, dispatch, answer}) => {
  const isAnswered = answer !== null;
  // console.log(question);
  
  return (
    
      <>
        {question.options.map((option, index) => {
        return (
        <button className= {`btn btn-option ${index === answer ? 'answer' : ''} ${isAnswered ? index === question.correctOption ? 'correct' : 'wrong' : null }`} key={option} onClick={()=>dispatch({type: 'newAnswer', payload:{ index:index, question:question}})} disabled={isAnswered}>
          {option}
        </button>
        )
        })}
      </>
    
  )
}

export default Options

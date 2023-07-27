import React from 'react'

const StartScreen = ({numQuestion, dispatch}) => {
  return (
    <div className='start'>
      <h2>Welcome to quizzy app!</h2>
      <h3>Answer {numQuestion} questions to test your mastery of any category </h3>
      <button className='btn btn-ui' onClick={()=>dispatch({type:'starthtml'})}>HTML</button>
      <button className='btn btn-ui' onClick={()=>dispatch({type:'startcss'})}>CSS</button>
      <button className='btn btn-ui' onClick={()=>dispatch({type:'startjavascript'})}>JAVASCRIPT</button>
      <button className='btn btn-ui' onClick={()=>dispatch({type:'startreact'})}>REACT</button>
    </div>
  )
}

export default StartScreen;

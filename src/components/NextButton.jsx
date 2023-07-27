import React from 'react'

const NextButton = ({dispatch, answer, numQuestion, index}) => {
    if(answer === null) return null;

    if(index < numQuestion - 1) return <button className='btn btn-ui' onClick={()=>{return dispatch({type: 'nextQuestion'})}}>Next</button>

    if(index === (numQuestion - 1)) return <button className='btn btn-ui' onClick={()=>{return dispatch({type: 'finish'})}}>Finish</button>

}

export default NextButton;

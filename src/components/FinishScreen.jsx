import React from 'react';

const FinishScreen = ({points, maxPossiblePoint, highScore, dispatch})=>{
    const percentage = Math.round((points/maxPossiblePoint) * 100);
    let emoji;
    if(percentage === 100) emoji = '👍' ;
    if(percentage > 100 && percentage >= 80) emoji = '✔' ;
    if(percentage < 80 && percentage >= 50) emoji = '👌' ;
    if(percentage < 50 && percentage > 20) emoji = '✌' ;
    if(percentage <= 20) emoji = '✌' ;

    return (<div>
        <p className='result'>
            
            SCORE: {points} {emoji} <br/>
            PERCENTAGE: {percentage}% <br />
            MAX-POINT: {maxPossiblePoint}
            
        </p>
        <p className='result'> HIGHSCORE: {highScore}</p>
        <button className='btn btn-ui' onClick={()=> dispatch({type: 'reset'})}> Restart Quiz </button>

    </div>)
}

export default FinishScreen;
import React,{useEffect} from 'react'

const Timer = ({dispatch,timeRemaining}) => {
    const mins = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60
    
    useEffect(
        ()=>{
            const id = setInterval(()=>{
                // console.log('tick');
             dispatch({type: 'tick'})   
            }, 1000);

            return ()=> clearInterval(id);
        },[dispatch]
    )
  return (
    <div className='timer'>{mins < 10 && '0'}{mins}: {seconds < 10 && '0'}{seconds}</div>
  )
}

export default Timer;

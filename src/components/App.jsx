import React, {useEffect, useReducer} from 'react';
import Header from './Header';
import Loader from './Loader';
import Error from "./Error";
import StartScreen from './StartScreen';
// import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import QuestionHTML from './QuestionHTML';
import QuestionCSS from './QuestionCSS';
import QuestionJavascript from './QuestionJavascript';
import QuestionReact from './QuestionReact';
import QuestionData from './QuestionData';



// this sets the time for each question to 15 secs
const SECS_PER_QUESTION = 15

// REDUCER
const reducer = (state, action)=>{
  switch(action.type){
    case 'dataReceived':
      return {
        ...state, 
        questions: action.payload,
        questionHtml: state.questions.filter((question)=> {
          return question.category === 'HTML'
          
        }),
        questionCss: state.questions.filter((question)=> {
          return question.category === 'CSS'
        }),
        questionJavascript: state.questions.filter((question)=> {
          return question.category === 'JavaScript'
        }),
        questionReact: state.questions.filter((question)=> {
          return question.category === 'React'
        }),
        //retrieve the highscore form json server
        highScore: action.payload[0].highscore,
        status: 'ready'
      }
    case 'dataFailed':
      return{
        ...state,
        status: action.payload
      }
    case 'starthtml':
      return{
        ...state,
        status: 'active',
        activeSection: 'html',
        timeRemaining: state.questionHtml.length * SECS_PER_QUESTION,
        numQuestion: state.questionHtml.length,
        maxPossiblePoint: state.questionHtml.reduce((prev, cur)=> prev + cur.points, 0),
      }
    case 'startcss':
      return{
        ...state,
        status: 'active',
        activeSection: 'css',
        timeRemaining: state.questionCss.length * SECS_PER_QUESTION,
        numQuestion: state.questionCss.length,
        maxPossiblePoint: state.questionCss.reduce((prev, cur)=> prev + cur.points, 0)
      }
    case 'startjavascript':
      return{
        ...state,
        status: 'active',
        activeSection: 'javascript',
        timeRemaining: state.questionJavascript.length * SECS_PER_QUESTION,
        numQuestion: state.questionJavascript.length,
        maxPossiblePoint: state.questionJavascript.reduce((prev, cur)=> prev + cur.points, 0),
      }
    case 'startreact':
      return{
        ...state,
        status: 'active',
        activeSection: 'react',
        timeRemaining: state.questionReact.length * SECS_PER_QUESTION,
        numQuestion : state.questionReact.length,
        maxPossiblePoint: state.questionReact.reduce((prev, cur)=> prev + cur.points, 0)

      }
    case 'newAnswer':
      //get access to the current question
      const question = action.payload.question;
      return{
        ...state,
        answer: action.payload.index,
        points: action.payload.index === question.correctOption ? state.points + question.points : state.points,
      }

    case 'nextQuestion':
      return{
        ...state,
        index: state.index + 1,
        answer: null
      }
    
    case 'finish':
      const newHighScore = state.points > state.highScore ? state.points : state.highScore
      const updateHighScore = (newHighScore)=>{
        fetch('http://localhost:8000/questions',{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({highscore: newHighScore}),
          
        })
        .then((res)=>{
          if(!res.ok){
            throw new Error('failed to upload new highscore to the server')
          }
          dispatch({type: 'highScoreUpdated', payload: newHighScore})
        })
        .catch((error)=>{
          console.log(error)
        });
      }

      updateHighScore(newHighScore)
     

      return{
        ...state, status: 'finished', 
        highScore: newHighScore
        
      
      }
      case 'highScoreUpdated' :
        return{
          ...state, highScore: action.payload,
        }
      

    case 'tick':
      return{
        ...state, timeRemaining: state.timeRemaining - 1, status: state.timeRemaining === 0 ? 'finished' : state.status,
      }

    case 'reset':
      return{
        ...state,
        questions: state.questions,
        questionHtml: state.questionHtml,
        questionCss: state.questionCss,
        questionJavascript: state.questionJavascript,
        questionReact: state.questionReact,
        status: 'ready',
        index: 0,
        answer: null,
        points: 0,
        activeSection: null
        
      }
    

    default:
      throw new Error('Action Unknown');
  }
}


//INITIAL STATE
const initialState = {
  questions: [],
  questionHtml: [],
  questionCss: [],
  questionJavascript: [],
  questionReact: [],

  //'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  //react, html, css, javascript
  activeSection: null,
  index: 0,
  answer: null,
  points: 0,
  highScore: null,
  timeRemaining: null,
  maxPossiblePoint: null,
  numQuestion: null,
}


// APP COMPONENT
function App() {
  
  const [{questions, questionHtml, questionCss, questionJavascript, questionReact,numQuestion, maxPossiblePoint, highScore, activeSection, status, index, answer, points, timeRemaining}, dispatch] = useReducer(reducer, initialState);
     
  const getQuestions = (data)=>{
    dispatch({type: 'dataReceived', payload: data})
  }
  /* // send request json server to fetch the questions
  useEffect(()=>{
    
    try{
      fetch('http://localhost:8000/questions')
      .then((res)=> {
        if(!res.ok){
          throw new Error('API request fail');
        }
        return res.json()
      })
      .then((data)=>{
        // console.log(data);       
        dispatch({type: 'dataReceived', payload: data});
      } )
      .catch(err => {
        console.log(err)
        dispatch({type: 'dataFailed'});
        
      })
     
    }catch(e){
      console.log(e);
    }
      
        
  }, []);
 */

  return (
    <div className='app'>
      <QuestionData getQuestions={getQuestions}/>
      <Header />

      <main className='main'>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestion = {numQuestion} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            

            {activeSection === 'html' && 
              (<>
              <Progress  index = {index} numQuestion={numQuestion} points={points} maxPossiblePoint={maxPossiblePoint} answer = {answer} />
              <QuestionHTML questionHtml={questionHtml[index]} dispatch={dispatch} answer ={answer} />
              </>)
           }
            {activeSection === 'css' && 
              (<>
              <Progress  index = {index} numQuestion={numQuestion} points={points} maxPossiblePoint={maxPossiblePoint} answer = {answer} />
              <QuestionCSS questionCss={questionCss[index]} dispatch={dispatch} answer ={answer} />
              </>)
           }

            {activeSection === 'javascript' &&
              (<> 
              <Progress  index = {index} numQuestion={numQuestion} points={points} maxPossiblePoint={maxPossiblePoint} answer = {answer} />
              <QuestionJavascript questionJavascript={questionJavascript[index]} dispatch={dispatch} answer ={answer} />
              </>)
           }
            {activeSection === 'react' && 
              (<>
              <Progress  index = {index} numQuestion={numQuestion} points={points} maxPossiblePoint={maxPossiblePoint} answer = {answer} />
              <QuestionReact questionReact={questionReact[index]} dispatch={dispatch} answer ={answer} />
              </>)
            }
           
            <Footer> 
              <NextButton dispatch = {dispatch} answer = {answer} numQuestion={numQuestion} index={index} />
              <Timer dispatch={dispatch} timeRemaining={timeRemaining}/>
            </Footer> 
          </>
        )}
        {status === 'finished' && <FinishScreen points={points} maxPossiblePoint={maxPossiblePoint} highScore={highScore} dispatch={dispatch} />}
        
      </main>
    </div>
  )
}

export default App;

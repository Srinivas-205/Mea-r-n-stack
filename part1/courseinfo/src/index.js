import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const course = 'Half Stack application development'
  const pieces = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
     id: 4  

    },
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
function Header(){
  return(
    <h2>{course}</h2>
  )
}
function Content({piece}){
  return(
    <div>
      <p>
        {piece[0].name}--{piece[0].exercises}
      </p>
      <p>
        {piece[1].name}--{piece[1].exercises}
      </p>
      <p>
        {piece[2].name}--{piece[2].exercises}
      </p>
      <p>
        {piece[3].name}--{piece[3].exercises}
      </p>
    </div>
  )
}
  function Total({piece}){
    var total=0;
    piece.map(piece =>
      total=total+piece.exercises
      )
      return total

  }


ReactDOM.render(
  <div>
    <h1>Web development Circulum</h1>
      <Header/>
      <Content piece={pieces}/>
   <Total piece={pieces}/>
   
  </div>
  
  
   

 
   

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
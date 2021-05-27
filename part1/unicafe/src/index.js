import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


function Anecdote(){
  const [selected,setSelected]=useState(0)
  const [vote,setVote]=useState(
    new Array(anecdotes.length).fill(0)

  )

  function Randomanecdote(){
    var h= Math.floor(Math.random() * 6);
    setSelected(h) 
  }
  function Vote(){
    const h=[...vote]
    h[selected]+=1
    setVote(h)
  }
  function Max(){
    var h=0;
    var index=0
    vote.forEach((value, i) => {
      if (h < value) {
        h = value
        index = i
      }
    })
    return index;
  }
  const max=Max();
  return (
    <div>
      <h1>Annecdote of the day</h1>
      <p>{anecdotes[selected]}</p><br></br>
      <p> has {vote[selected]}</p>
      <button onClick={Randomanecdote}>next</button>
      <button onClick={Vote}>vote</button>
      <h1>Annecdote with highest number of votes</h1>
      <p>{anecdotes[max]}</p>
      <p>{vote[max]}</p>
    </div>
  )





}
  

ReactDOM.render(
 <Anecdote></Anecdote>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
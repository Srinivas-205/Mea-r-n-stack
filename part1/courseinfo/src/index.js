import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

function Statistics({good,bad,neutral}){
  var average=(good *1+bad * -1+neutral *0)/(good+neutral+bad);
  var positive=(good)/(good+neutral+bad)*100;
  
    if (good > 0 || neutral > 0 || bad > 0){
      return(
      
        
        <div>
           <h1>Statistics</h1>
            <table>
              <tbody>
         
          <Show s="good" e={good} />
            <Show s="neutral" e={neutral} />
            <Show s="bad" e={bad} />
            <Show s="all" e={good+neutral+bad}/>
            <Show s="average" e={average} />
            <Show s="positive" e={ positive+"%"} />
        
        </tbody>

        
        </table>
        </div>
      )
     

    }
     
      
      return (
        <p>no feedback given</p>
      )
    
     

  
  



}
function Show({s,e}){
  return(
    <tr>
    <td>{s}</td>
    <td>{e}</td>
  </tr>

  )

}
function Unicef(){
  const [good,setGood]=useState(
    0
  )
  const [bad,setBad]=useState(
    0
  )
  const [neutral,setNeutral]=useState(
    0
  )
  return (
    
    
      
    
    
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    
    
 
    </div>
    
  
  )



}

ReactDOM.render(
  <div>
      <Unicef/>
      

  </div>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
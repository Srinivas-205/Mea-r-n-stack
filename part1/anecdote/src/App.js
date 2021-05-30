import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

const App = () => {
const [ persons, setPersons ] = useState([
  { name: 'Arto Hellas' }
]) 
const [ newName, setNewName ] = useState('')

return (
  <div>
    <h2>Phonebook</h2>
    <form>
      <div>
        Filter: <input type="text" filter="" />
      </div>
    <h2>Add a new</h2>
    <form>
        name: <input type="text" Placeholder="Name" name="" />
        number: <input type="phone" Placeholder="1234567890" name="" />
    </form>  
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    </div>
)  
}
export default App
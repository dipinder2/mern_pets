import './App.css';
import {useState,useEffect} from 'react'
import {Router} from '@reach/router';
import New from './components/New'
import Edit from './components/Edit'
import List from './components/List'
import Show from './components/Show'

function App() {

  return (
    <div className="App">
    <Router>
      <List path="/" />
      <New path="/pets/new"/>
      <Edit path="/pets/edit/:id"/>
      <Show path="/pets/show/:id"/>

    </Router>

    </div>
  );
}

export default App;

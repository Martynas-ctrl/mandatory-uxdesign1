import React from 'react';
import './App.css';
import './Css/Container.css';
import Container from './Components/Container';
import TextFields from './Components/TextFields';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

function App() {
  
  return (
    <Router> 
      <div className='App'>
        <header className='App-header'></header>
      </div>
      <main>
        <Route path='/' exact><Container /></Route>
        <Route path='/TextFields' ><TextFields /></Route>
      </main>
    </Router>
  );
}

export default App
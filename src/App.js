import React from 'react';
import './App.css';
import './Css/Container.css';
import Container from './Components/Container';
import Selectors from './Components/Selectors';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

function App() {

  return (
    <Router> 
      <div className='App'>
        <header className='App-header'></header>
      </div>
      <main>
        <Route path='/' exact><Container /></Route>
        <Route path='/Selectors' ><Selectors /></Route>
      </main>
    </Router>
  );
}

export default App
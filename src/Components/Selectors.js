import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';

class Selectors extends Component {

    render() {
      return (
        <div className='container'>
          <header className='header'>
            <h1 className='title'>Home</h1>
          </header>
          <main>
          <ToggleSwitch />
          </main>
          <footer>
            <Link to='/TextFields'><p>TextFields</p></Link>
            <Link to='/'><h2>Home</h2></Link>
            <Link to ='/Selectors'><p>Selectors</p></Link>
          </footer> 
        </div>
       )
    }
}

export default Selectors
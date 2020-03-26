import React, { Component } from 'react';
import Image from '../Images/WelcomeImg.png';
import { Link } from 'react-router-dom';
import SelectorsImg from '../Images/SelectorsImg.svg';

class Container extends Component {
  
    render() {
      return (
        <div className='container'>
          <header className='header'>
            <h1 className='title'>Home</h1>
          </header>
          <main className='mainContainer'>
            <img src={Image}></img>
          </main>
          <footer>   
            <Link to='/TextFields'><img style={{width:'60px', height: '60px'}} src={SelectorsImg}></img></Link>
          </footer> 
        </div>
        )
    }
}

export default Container
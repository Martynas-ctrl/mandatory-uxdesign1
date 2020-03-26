import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/TextFields.css';
import ToggleSwitch from './ToggleSwitch';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';
import homeImg from '../Images/HomeImg.svg';

class TextFields extends Component {
    
    render() {
      return (
        <div className='container'>
          <header className='header'>
            <h1 className='title'>Selectors</h1>
          </header>
          <main className='mainTextFields'>
            <div className='inputEmail'>
              <input class='floatingInput' name='input name' placeHolder='placeholdery'></input>
              <label for='inputId' class='floatingLabel' data-content='Email'></label>
            </div>
            <div className='inputPassword'>
              <input class='floatingInput' name='input name' placeholder='Placeholder'></input>
              <label for='inputId' class='floatingLabel' data-content='Password'></label>
            </div>
            <label style={{ marginTop: 20 , display: 'flex' }}>
              <Checkbox />
              <span style={{ marginLeft: 10 }}>Save password</span>
            </label>
            <input className='buttonLogin' type='submit' value='Sign In'></input>
              <ToggleSwitch />
              <RadioButton />
          </main>
          <footer className='textFieldFooter'> 
            <Link to='/'><img style={{width:'60px', height: '60px'}} src={homeImg}></img></Link> 
          </footer>
        </div>
        )
    }
}

export default TextFields
import React, { Component } from 'react';
import '../Css/RadioButton.css';

class RadioButton extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
        checked: '',
      };
    }
    
    onChangeRadioButton = (e) => {
      this.setState({
        checked: e.target.value,
      })
    }
      
    render() {
      return (
        <div>
          <label>
            <input className='input' type='radio' value='English' checked={this.state.checked === 'English'} onChange={this.onChangeRadioButton}/>
            <span>English</span>
          </label>
          <label>
            <input className='input' type='radio' value='Swedish' checked={this.state.checked === 'Swedish'} onChange={this.onChangeRadioButton}/>
            <span>Swedish</span>
          </label>
        </div>
      )
    }
 }

export default RadioButton
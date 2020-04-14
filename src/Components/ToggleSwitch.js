import React, { Component } from 'react';
import '../Css/ToggleSwitch.css';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  onChangeCheckbox = e => {
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    if(this.state.checked) {
      return (
        <>
          <style>{'body { background-color: #2c2f33; }'}</style>
          <label class='switchContainer'>
            <input type='checkbox' checked={this.state.checked} onChange={this.onChangeCheckbox} />
              <span class='switchSlider'/>
          </label>
        </>
      )
    }else {
      return (
        <>
          <label class='switchContainer'>
            <input type='checkbox' checked={this.state.checked} onChange={this.onChangeCheckbox} />
              <span class='switchSlider'/>
          </label>
        </>
      )
    }
  }
}
    
export default ToggleSwitch
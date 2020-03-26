import React, { Component } from 'react';
import styled from 'styled-components';

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
          <SwitchContainer>
            <SwitchSliderInput type='checkbox' checked={this.state.checked} onChange={this.onChangeCheckbox} />
              <SwitchSlider />
          </SwitchContainer>
        </>
      )
    }else {
      return (
        <>
          <SwitchContainer>
            <SwitchSliderInput type='checkbox' checked={this.state.checked} onChange={this.onChangeCheckbox} />
              <SwitchSlider />
          </SwitchContainer>
        </>
      )
    }
  }
}
    
export default ToggleSwitch

// Styling
const SwitchContainer = styled.label`
  position: relative;
  top: 200px;
  left: 890px;
  width: 60px;
  height: 30px;

  > Input {
    display: none;
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e0e0e0;
  border-radius: 20px;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    background-color: #7289da;
    border-radius: 20px;
`;

const SwitchSliderInput = styled.input`
  &:checked + ${SwitchSlider} {
    background-color: #7289da;
    
    &:before {
        transform: translateX(30px);
        background-color: white;
    }
  }
`;
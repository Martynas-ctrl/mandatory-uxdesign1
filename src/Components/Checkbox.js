import React, { Component } from 'react';
import styled from 'styled-components';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  changeCheckbox = e => {
    this.setState({ 
        checked: e.target.checked,
    })
  }

  render() {
    return (
      <div>
        <CheckboxContainer>
          <HiddenCheckbox checked={this.state.checked} onChange={this.changeCheckbox} />
          <StyledCheckbox checked={this.state.checked}>
            <Icon viewBox='0 0 24 24'>
              <polyline points='20 6 9 17 4 12' />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
      </div>
    )
  }
}

export default Checkbox

// Styling
const CheckboxContainer = styled.div`
  margin-top: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  background: #7289da;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  margin-bottom: 2px;
  transform: translate(-3%, -3%);
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
`

const StyledCheckbox = styled.div`
${HiddenCheckbox}:focus + & {
  box-shadow: 0 0 0 8px rgba(176, 198, 250, 0.5);
  background-color: rgba(176, 198, 250, 0.5);
}

${HiddenCheckbox}:hover + & {
  box-shadow: 0 0 0 7px rgba(222, 221, 251, 0.5);
}
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 3px;
  border: 1px solid grey;

  ${Icon} {
    visibility: ${e => (e.checked ? 'visible' : 'hidden')}
  }
`
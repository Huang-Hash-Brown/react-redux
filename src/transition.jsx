import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => { return { show: !prevState.show } })
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={ this.state.show }
          timeout={ 500 }
          classNames='fade'
          unmountOnExit
          onEntered={(el) => { el.style.color = 'skyblue' }}
          appear={ true }
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={ this.handleToggle }>Toggle</button>
      </Fragment>
    )
  }

}

export default Transition;
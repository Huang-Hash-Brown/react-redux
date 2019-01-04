import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index, deleteItem } = this.props
    deleteItem(index)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { content } = this.props
    console.log('content', content)
    return (
      <Fragment>
        <li onClick={ this.handleClick }>{ content }</li>
      </Fragment>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  content: 'hi'
}

export default TodoItem
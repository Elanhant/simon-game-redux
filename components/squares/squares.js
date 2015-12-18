import React from 'react';
import bem from 'react-bem-classes';
import "./squares.scss";

@bem({
  block: 'squares',
  modifiers: ['failed']
})
export default class Squares extends React.Component {

  render() {
    return (
      <div className={this.block()}>
        {this.props.children}
      </div>
    );
  }
}

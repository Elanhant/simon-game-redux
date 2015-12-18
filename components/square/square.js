import React from 'react';
import bem from 'react-bem-classes';
import "./square.scss";

@bem({
  block: 'square',
  modifiers: ['color', 'active', 'animationSpeed']
})
export default class Square extends React.Component {
  render() {
    return (
      <div className={this.block()} {...this.props}>
      </div>
    );
  }
}

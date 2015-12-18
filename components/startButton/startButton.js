import React from 'react';
import bem from 'react-bem-classes';
import "./startButton.scss";

@bem({
  block: 'startButton'
})
export default class StartButton extends React.Component {
  render() {
    return (
      <div className={this.block()}>
        <button className={this.element('button')} {...this.props} />
      </div>
    );
  }
}

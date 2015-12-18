import React from 'react';
import bem from 'react-bem-classes';
import "./main.scss";

@bem({
  block: 'main'
})
export default class Main extends React.Component {
  render() {
    return (
      <main className={this.block()}>
        {this.props.children}
      </main>
    );
  }
}

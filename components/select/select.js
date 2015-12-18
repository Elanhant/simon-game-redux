import React  from 'react';
import bem    from 'react-bem-classes';
import "./select.scss";

@bem({
  block: 'select'
})
export default class Select extends React.Component {
  render() {
    return (
      <div className={this.block()}>
        <select className={this.element('inner')} {...this.props} />
      </div>
    );
  }
}

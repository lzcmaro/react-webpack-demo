import React from 'react';
import './hello.scss';

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!!!....</h1>
    );
  }
}

export default Hello;
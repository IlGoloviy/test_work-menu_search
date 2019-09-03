import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}
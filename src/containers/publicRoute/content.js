import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <article className="main-content">
        {this.props.children}
      </article>
    );
  }
}
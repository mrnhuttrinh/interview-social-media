import React from 'react';
import './loading.scss';

export default class Loading extends React.Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="main-loading">
          Loading
        </div>
      );
    }
    return null;
  }
}
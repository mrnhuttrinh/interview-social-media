import React from 'react';
import _ from 'lodash';
import CommentView from './commentView';

export default class CommentListView extends React.Component {
  renderListComment() {
    const { comments } = this.props;
    return _.map(comments, comment => (<CommentView key={`comment_${comment.id}`} comment={comment} />))
  }
  render() {
    return (
      <div>
        <h3>View Comments</h3>
        {this.renderListComment()}
      </div>
    );
  }
}
import React from 'react';
import _ from 'lodash';
import CommentView from './commentView';
import NewCommentView from './newCommentView';

export default class CommentListView extends React.Component {
  renderListComment() {
    const { comments } = this.props;
    return _.map(comments, comment => (<CommentView key={`comment_${comment.id}`} comment={comment} />))
  }
  render() {
    return (
      <div className="comment-list-view">
        <h3>View Comments</h3>
        <NewCommentView />
        {this.renderListComment()}
      </div>
    );
  }
}
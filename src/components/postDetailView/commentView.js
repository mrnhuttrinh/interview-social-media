import React from 'react';
import { Media } from 'react-bootstrap';

export default class CommentView extends React.Component {
  render() {
    const { comment } = this.props
    return (
      <Media>
        <Media.Left>
          <img width={64} height={64} src="https://picsum.photos/64/64" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Name: {comment.name}</Media.Heading>
          <Media.Heading>Email: {comment.email}</Media.Heading>
          <p>
            {comment.body}
          </p>
        </Media.Body>
      </Media>
    );
  }
}
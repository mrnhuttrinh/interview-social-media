import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Media } from 'react-bootstrap';

class PostView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(path) {
    const {
      history
    } = this.context;
    history.push(path);
  }
  render() {
    const { post = {} } = this.props;
    return (
      <Panel className="post-view">
        <Panel.Heading>
          <Panel.Title>Post {post.id}: {post.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Media>
            <Media.Left>
              <img  className="avatar" width={210} height={160} src="https://picsum.photos/210/160" alt="thumbnail" />
            </Media.Left>
            <Media.Body className="post-content">
              <Media.Heading>
                {post.body}
              </Media.Heading>
              <span className="view-comment" onClick={() => this.onMenuClick(`/posts/${post.id}`)}>View detail</span>
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    );
  }
}
PostView.contextTypes = {
  history: PropTypes.func,
};

export default PostView;

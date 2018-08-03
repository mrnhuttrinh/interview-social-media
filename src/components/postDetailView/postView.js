import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Media, Glyphicon, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class PostView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onEditPost = this.onEditPost.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
  }
  onMenuClick(path) {
    const {
      history
    } = this.context;
    history.push(path);
  }
  onEditPost() {
    const { location, history } = this.context;
    const params = new URLSearchParams(location.search);
    params.set('dialog', 'edit-post');
    const newURL = `${location.pathname}?${params.toString()}`;
    history.push(newURL);
  }
  onDeletePost() {
    const { location, history } = this.context;
    const params = new URLSearchParams(location.search);
    params.set('dialog', 'delete-post');
    const newURL = `${location.pathname}?${params.toString()}`;
    history.push(newURL);
  }
  render() {
    const { post = {} } = this.props;
    return (
      <Panel className="post-view">
        <Panel.Heading>
          <Panel.Title>
            Post {post.id}: {post.title}
            <ButtonToolbar className="pull-right" style={{marginTop: -5}}>
              <ButtonGroup>
                <Button onClick={this.onEditPost}>
                  <Glyphicon glyph="pencil" />
                </Button>
                <Button onClick={this.onDeletePost}>
                  <Glyphicon glyph="remove" />
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Panel.Title>
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
              {this.props.children}
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    );
  }
}
PostView.contextTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default PostView;

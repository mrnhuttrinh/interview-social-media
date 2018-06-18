import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Media } from 'react-bootstrap';

class AlbumView extends React.Component {
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
    const { album = {} } = this.props;
    return (
      <Panel className="post-view">
        <Panel.Heading>
          <Panel.Title>Album {album.id}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Media>
            <Media.Left>
              <img  className="avatar" width={200} height={150} src="https://picsum.photos/200/150" alt="thumbnail" />
            </Media.Left>
            <Media.Body className="post-content">
              <Media.Heading>
                {album.title}
              </Media.Heading>
              <span className="view-comment" onClick={() => this.onMenuClick(`/albums/${album.id}`)}>View detail</span>
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    );
  }
}
AlbumView.contextTypes = {
  history: PropTypes.object,
};

export default AlbumView;

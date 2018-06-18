import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import { Panel, Media } from 'react-bootstrap';
import Loading from '../commons/loading';

class PhotoDetailView extends React.Component {
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
  componentDidMount() {
    this.props.actions.photo.getOne(this.props.match.params.id).then(() => {
      const photo = this.props.photoData.get('data') || {};
      this.props.actions.album.getOne(photo.albumId);
    });
  }
  render() {
    const photo = this.props.photoData.get('data') || {};
    const album = this.props.albumData.get('data') || {};
    return (
      <div>
        <Loading loading={this.props.photoData.get('requesting')} />
        <Panel className="post-view">
          <Panel.Heading>
            <Panel.Title>Photo {photo.id}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Media>
              <Media.Left>
                <img className="avatar" src={photo.thumbnailUrl} alt="thumbnail" />
              </Media.Left>
              <Media.Body className="post-content">
                <Media.Heading>
                  Title: {photo.title}
                </Media.Heading>
                <Media.Heading>
                  <a onClick={() => this.onMenuClick(`/albums/${album.id}`)}>Album: {album.title}</a>
                </Media.Heading>
              </Media.Body>
            </Media>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

PhotoDetailView.contextTypes = {
  history: PropTypes.object,
};


const mapStateToProps = (state) => ({
  photoData: state.photo.get('one'),
  albumData: state.album.get('one'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    photo: bindActionCreators(actions.photo, dispatch),
    album: bindActionCreators(actions.album, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoDetailView);
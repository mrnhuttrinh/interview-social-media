import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import Loading from '../commons/loading';
import GalleryView from './galleryView';

class AlbumDetailView extends React.Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.album.getOne(this.props.match.params.id);
      this.props.actions.photo.getList(this.props.match.params.id);
    }
  }
  render() {
    const style = { position: 'relative' };
    const album = this.props.albumData.get('data') || {};
    return (
      <div>
        <div style={style}>
          <Loading loading={this.props.albumData.get('requesting')} />
          <h2>Preview: {album.title}</h2>
          <div style={style}>
            <Loading loading={this.props.photoList.get('requesting')} />
            <GalleryView photos ={this.props.photoList.get('data')} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albumData: state.album.get('one'),
  photoList: state.photo.get('list'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    album: bindActionCreators(actions.album, dispatch),
    photo: bindActionCreators(actions.photo, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumDetailView);

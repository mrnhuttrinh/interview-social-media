import React from 'react';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class GalleryView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(event, data) {
    const { photo } = data;
    const {
      history
    } = this.context;
    history.push(`/photos/${photo.id}`);
  }
  getPhotoSet() {
    const { photos } = this.props;
    return _.map(photos, photo => ({
      ...photo,
      src: photo.thumbnailUrl,
    }));
  }
  render() {
    return (
      <Gallery onClick={this.onMenuClick} photos={this.getPhotoSet()} />
    );
  }
}

GalleryView.contextTypes = {
  history: PropTypes.func,
};

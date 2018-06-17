import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import actions from '../../actions';
import AlbumView from './albumView';
import Loading from '../commons/loading';

import './styles.scss';

class AlbumListView extends React.Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.getList(`?userId=${this.props.match.params.id}`);
    } else {
      this.props.actions.getList();
    }
  }
  renderListAlbum() {
    return _.map(this.props.albumList.get('data'), album => (<AlbumView key={`post_${album.id}`} album ={album} />));
  }
  render() {
    const style = { position: 'relative' };
    return (
      <div style={style}>
        <Loading loading={this.props.requesting} />
        {this.renderListAlbum()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albumList: state.album.get('list'),
  requesting: state.album.get('requesting')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.album, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumListView);

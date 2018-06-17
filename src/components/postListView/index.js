import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import _ from 'lodash';
import Loading from '../commons/loading';

import './styles.scss';
import PostView from './postView';

class PostListView extends React.Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.getList(`?userId=${this.props.match.params.id}`);
    } else {
      this.props.actions.getList();
    }
  }
  renderListPost() {
    return _.map(this.props.postList.get('data'), post => (<PostView key={`post_${post.id}`} post ={post} />));
  }
  render() {
    const style = { position: 'relative' };
    return (
      <div style={style}>
        <Loading loading={this.props.requesting} />
        {this.renderListPost()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.post.get('list'),
  requesting: state.post.get('requesting')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.post, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListView);

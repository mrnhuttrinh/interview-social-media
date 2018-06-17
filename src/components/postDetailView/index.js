import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import Loading from '../commons/loading';
import PostView from './postView';
import CommentListView from './commentListView';
import './styles.scss';

class PostDetailView extends React.Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.post.getOne(this.props.match.params.id);
      this.props.actions.comment.getList(this.props.match.params.id);
    }
  }
  render() {
    const style = { position: 'relative' };
    return (
      <div>
        <div style={style}>
          <Loading loading={this.props.postData.get('requesting')} />
          <PostView post ={this.props.postData.get('data')}>
            <div style={style}>
              <Loading loading={this.props.commentList.get('requesting')} />
              <CommentListView comments ={this.props.commentList.get('data')} />
            </div>
          </PostView>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.post.get('one'),
  commentList: state.comment.get('list'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    post: bindActionCreators(actions.post, dispatch),
    comment: bindActionCreators(actions.comment, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailView);

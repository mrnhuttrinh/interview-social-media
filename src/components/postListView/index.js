import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import _ from 'lodash';
import Loading from '../commons/loading';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.scss';
import PostView from './postView';

class PostListView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.getList(`?userId=${this.props.match.params.id}`);
    } else {
      this.props.actions.getList();
    }
  }
  onMenuClick(event) {
    const {
      history
    } = this.context;
    history.push(`/users/${this.props.match.params.id}/posts?dialog=new-post`);
  }
  renderListPost() {
    return _.map(this.props.postList.get('data'), post => (<PostView key={`post_${post.id}`} post ={post} />));
  }
  render() {
    const style = { position: 'relative' };
    return (
      <div style={style}>
        <Loading loading={this.props.postList.get('requesting')} />
        {
          this.props.addButton && (
            <ButtonToolbar>
              <Button onClick={this.onMenuClick} bsStyle="success" className="pull-right">New Post</Button>
            </ButtonToolbar>
          )
        }
        {this.renderListPost()}
      </div>
    );
  }
}

PostListView.contextTypes = {
  history: PropTypes.object,
};


const mapStateToProps = (state) => ({
  postList: state.post.get('list'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.post, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListView);

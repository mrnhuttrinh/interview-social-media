import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import actions from '../../actions';

class DeletePostView extends React.Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }
  componentDidMount() {
    const postData = this.props.postData.get('data') || {};
    if (_.isEmpty(postData)) {
      if (this.props.match && this.props.match.params && this.props.match.params.id) {
        this.props.actions.post.getOne(this.props.match.params.id);
      }
    }
  }
  deletePost(e) {
    const postData = this.props.postData.get('data') || {};
    this.props.actions.post.remove(postData.id).then(() => {
      this.props.handleClose(e, `/users/${postData.userId}`);
    });
  }
  render() {
    const postData = this.props.postData.get('data') || {};
    const { deletePost } = this.props;

    return (
      <Modal backdrop="static" show={this.props.show} bsSize="large" onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete {postData.title}
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={deletePost.get('requesting')} onClick={this.props.handleClose}>Close</Button>
          <Button disabled={deletePost.get('requesting')} onClick={this.deletePost} bsStyle="warning">Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.post.get('one'),
  deletePost: state.post.get('delete'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    post: bindActionCreators(actions.post, dispatch),
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeletePostView);

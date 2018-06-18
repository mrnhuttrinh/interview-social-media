import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import actions from '../../actions';

class EditPostView extends React.Component {
  constructor(props, context) {
    super(props, context);
    const postData = props.postData.get('data') || {};
    this.state = {
      body: postData.body,
      title: postData.title,
    };
    this.onChange = this.onChange.bind(this);
    this.editPost = this.editPost.bind(this);
  }
  componentDidMount() {
    const postData = this.props.postData.get('data') || {};
    if (_.isEmpty(postData)) {
      if (this.props.match && this.props.match.params && this.props.match.params.id) {
        this.props.actions.post.getOne(this.props.match.params.id).then(() => {
          const postData = this.props.postData.get('data') || {};
          this.props.actions.user.getOne(postData.userId);
        });
      }
    } else {
      this.props.actions.user.getOne(postData.userId);
    }
  }
  componentWillReceiveProps(nextProps) {
    const postData = this.props.postData.get('data') || {};
    this.setState({
      body: postData.body,
      title: postData.title,
    });
  }
  editPost() {
    const postData = this.props.postData.get('data') || {};
    this.props.actions.post.update({
      id: postData.id,
      userId: postData.userId,
      title: this.state.title,
      body: this.state.body,
    }).then(() => {
      this.props.handleClose();
    });
  }
  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render() {
    const user = this.props.user.get('data') || {};
    const { updatePost } = this.props;
    return (
      <Modal backdrop="static" show={this.props.show} bsSize="large" onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={2}>
                User Name
              </Col>
              <Col sm={10}>
                <FormControl disabled type="text" placeholder="user name" value={user.name} />
              </Col>
            </FormGroup>

            <FormGroup controlId="title">
              <Col componentClass={ControlLabel} sm={2}>
                Title
              </Col>
              <Col sm={10}>
                <FormControl disabled={updatePost.get('requesting')} onChange={this.onChange} type="text" placeholder="Title" value={this.state.title} />
              </Col>
            </FormGroup>

            <FormGroup controlId="body">
              <Col componentClass={ControlLabel} sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl disabled={updatePost.get('requesting')} onChange={this.onChange} type="text" placeholder="Body" value={this.state.body} />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={updatePost.get('requesting')} onClick={this.props.handleClose}>Close</Button>
          <Button disabled={updatePost.get('requesting')} onClick={this.editPost} bsStyle="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


EditPostView.contextTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};


const mapStateToProps = (state) => ({
  postData: state.post.get('one'),
  user: state.user.get('one'),
  updatePost: state.post.get('update'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    post: bindActionCreators(actions.post, dispatch),
    user: bindActionCreators(actions.user, dispatch),
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPostView);

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import actions from '../../actions';

class NewPostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: ''
    };
    this.onChange = this.onChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }
  addPost() {
    const user = this.props.user.get('data') || {};
    this.props.actions.post.create({
      userId: user.id,
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
    const { createPost } = this.props;

    return (
      <Modal backdrop="static" show={this.props.show} bsSize="large" onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={2}>
                User Name
              </Col>
              <Col sm={10}>
                <FormControl disabled={createPost.get('requesting')} disabled type="text" placeholder="user name" value={user.name} />
              </Col>
            </FormGroup>

            <FormGroup controlId="title">
              <Col componentClass={ControlLabel} sm={2}>
                Title
              </Col>
              <Col sm={10}>
                <FormControl disabled={createPost.get('requesting')} onChange={this.onChange} type="text" placeholder="Title" value={this.state.title} />
              </Col>
            </FormGroup>

            <FormGroup controlId="body">
              <Col componentClass={ControlLabel} sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl disabled={createPost.get('requesting')} onChange={this.onChange} type="text" placeholder="Body" value={this.state.body} />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={createPost.get('requesting')} onClick={this.props.handleClose}>Close</Button>
          <Button disabled={createPost.get('requesting')} onClick={this.addPost} bsStyle="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.get('one'),
  createPost: state.post.get('create'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    post: bindActionCreators(actions.post, dispatch),
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostView);

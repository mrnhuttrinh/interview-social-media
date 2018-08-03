import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import { ButtonToolbar, ButtonGroup, Media, Button, Form, FormGroup, Col, Glyphicon, FormControl, ControlLabel } from 'react-bootstrap';

class CommentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      name: '',
      email: '',
      body: ''
    }
    this.onEditComment = this.onEditComment.bind(this);
    this.submitEditComment = this.submitEditComment.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  onEditComment() {
    const { comment } = this.props
    this.setState({
      editMode: true,
      name: comment.name,
      email: comment.email,
      body: comment.body
    })
  }
  submitEditComment() {
    const { comment } = this.props
    this.props.actions.comment.update({
      postId: comment.postId,
      id: comment.id,
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    }).then(() => {
      // clear state
      this.setState({
        editMode: false,
        name: '',
        email: '',
        body: ''
      });
      // update comment list
      const updateCommentData = this.props.updateComment.get('data');
      const commentListData = Object.assign([], this.props.commentList.get('data') || []);
      const updateItem = _.find(commentListData, c => c.id === comment.id);
      updateItem.name = updateCommentData.name;
      updateItem.email = updateCommentData.email;
      updateItem.body = updateCommentData.body;
      this.props.actions.comment.updateListCommentUI(commentListData);
    });
  }
  onDeleteComment() {
    const { comment } = this.props
    this.props.actions.comment.remove(comment.id).then(() => {
      // update comment list
      const commentListData = Object.assign([], this.props.commentList.get('data') || []);
      _.remove(commentListData, c => c.id === comment.id);
      this.props.actions.comment.updateListCommentUI(commentListData);
    });
  }
  render() {
    const { comment } = this.props
    if (this.state.editMode) {
      const { updateComment } = this.props;
      return (
        <Media>
          <Media.Left>
            <img width={64} height={64} src="https://picsum.photos/64/64" alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>New Comment</Media.Heading>
            <Form horizontal>
              <FormGroup controlId="name">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl disabled={updateComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Name" value={this.state.name} />
                </Col>
              </FormGroup>
              <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl disabled={updateComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Email" value={this.state.email} />
                </Col>
              </FormGroup>
              <FormGroup controlId="body">
                <Col componentClass={ControlLabel} sm={2}>
                  Body
                </Col>
                <Col sm={10}>
                  <FormControl disabled={updateComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Body" value={this.state.body} />
                </Col>
              </FormGroup>
              <FormGroup controlId="body">
                <Col sm={2}>
                </Col>
                <Col sm={10}>
                  <Button disabled={updateComment.get('requesting')} onClick={this.submitEditComment}>Edit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Media.Body>
        </Media>
      );
    } else {
      return (
        <Media>
          <Media.Left>
            <img width={64} height={64} src="https://picsum.photos/64/64" alt="thumbnail" />
          </Media.Left>
          <Media.Body style={{position: 'relative'}}>
            <Media.Heading>Name: {comment.name}</Media.Heading>
            <Media.Heading>Email: {comment.email}</Media.Heading>
            <ButtonToolbar className="comment-control">
              <ButtonGroup>
                <Button bsSize="xsmall" onClick={this.onEditComment}>
                  <Glyphicon glyph="pencil" />
                </Button>
                <Button bsSize="xsmall" onClick={this.onDeleteComment}>
                  <Glyphicon glyph="remove" />
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
            <p>
              {comment.body}
            </p>
          </Media.Body>
        </Media>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  updateComment: state.comment.get('update'),
  deleteComment: state.comment.get('delete'),
  commentList: state.comment.get('list'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    comment: bindActionCreators(actions.comment, dispatch),
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentView);

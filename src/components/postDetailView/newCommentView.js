import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Media, Button, Form, FormGroup, Col, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import actions from '../../actions';

class NewCommentView extends React.Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: '',
      email: '',
      body: ''
    };
  }
  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  addComment() {
    const postData = this.props.postData.get('data');
    this.props.actions.comment.create({
      postId: postData.id,
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    }).then(() => {
      // clear state
      this.setState({
        name: '',
        email: '',
        body: ''
      });
      // update comment list
      const createCommentData = this.props.createComment.get('data');
      const commentListData = Object.assign([], this.props.commentList.get('data') || []);
      commentListData.push(createCommentData);
      this.props.actions.comment.updateListCommentUI(commentListData);
    });
  }
  render() {
    const { createComment } = this.props;
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
                <FormControl disabled={createComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Name" value={this.state.name} />
              </Col>
            </FormGroup>
            <FormGroup controlId="email">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl disabled={createComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Email" value={this.state.email} />
              </Col>
            </FormGroup>
            <FormGroup controlId="body">
              <Col componentClass={ControlLabel} sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl disabled={createComment.get('requesting')} onChange={this.onChange} type="text" placeholder="Body" value={this.state.body} />
              </Col>
            </FormGroup>
            <FormGroup controlId="body">
              <Col sm={2}>
              </Col>
              <Col sm={10}>
                <Button disabled={createComment.get('requesting')} onClick={this.addComment}>Add</Button>
              </Col>
            </FormGroup>
          </Form>
        </Media.Body>
      </Media>
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.post.get('one'),
  createComment: state.comment.get('create'),
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
)(NewCommentView);

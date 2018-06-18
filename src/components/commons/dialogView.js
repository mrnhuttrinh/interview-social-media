import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import NewPostView from '../newPostView';
import EditPostView from '../editPostView';
import DeletePostView from '../deletePostView';

export default class DialogView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      dialogName: this.getDialogName(props),
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dialogName: this.getDialogName(nextProps),
    });
  }
  getDialogName(props) {
    const { location } = props;
    const params = new URLSearchParams(location.search);
    return params.get('dialog');
  }
  handleClose(e, newRedirectURL) {
    const {
      history
    } = this.context;
    if (!newRedirectURL) {
      const { location } = this.props;
      const params = new URLSearchParams(location.search);
      params.delete('dialog');
      const newURL = `${location.pathname}${params.toString()}`;
      history.push(newURL);
    } else {
      history.push(newRedirectURL);
    }
  }
  render() {
    if (this.state.dialogName === 'new-post') {
      return (<NewPostView show handleClose={this.handleClose} />);
    } else if (this.state.dialogName === 'edit-post') {
      return (<EditPostView show handleClose={this.handleClose} match={this.props.match} />);
    } else if (this.state.dialogName === 'delete-post') {
      return (<DeletePostView show handleClose={this.handleClose} match={this.props.match} />);
    }
    return null;
  }
}

DialogView.contextTypes = {
  history: PropTypes.object,
};

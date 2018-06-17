import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import actions from '../../actions';
import UserView from '../commons/userView';

class UserListView extends React.Component {
  componentDidMount() {
    this.props.actions.getList();
  }
  renderListUser() {
    return _.map(this.props.userList.get('data'), user => (<UserView viewDetail viewPosts viewAlbums key={`user_${user.id}`} user ={user} />));
  }
  render() {

    return (
      <div className="list-user-view">
        {this.renderListUser()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.user.get('list'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.user, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListView);

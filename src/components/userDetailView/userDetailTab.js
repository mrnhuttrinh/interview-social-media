import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';

import UserView from '../commons/userView';
import Loading from '../commons/loading';

class UserDetailTab extends React.Component {
  componentDidMount() {
    const { match: {
      params: {
        id
      }
    }} = this.props;
    this.props.actions.getOne(id);
  }
  render() {
    const style = { position: 'relative' };
    return (
      <div style={style}>
        <UserView viewMap user={this.props.user.get('data')} />
        <Loading loading={this.props.requesting} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.get('one'),
  requesting: state.user.get('requesting')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.user, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailTab);

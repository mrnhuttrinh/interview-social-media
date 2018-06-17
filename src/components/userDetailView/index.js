import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import UserDetailTab from './userDetailTab';
import PostListView from '../postListView';
import AlbumListView from '../albumListView';

class UserDetailView extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { match: {
      params: {
        view
      }
    }} = props;

    this.state = {
      view,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(key) {
    const {
      history
    } = this.props;
    const { match: {
      params: {
        id,
      }
    }} = this.props;
    history.push(`/users/${id}/${key}`);
  }
  render() {
    return (
      <Tabs
        defaultActiveKey={this.state.view}
        onSelect={this.handleSelect}
        id="noanim-tab-example"
      >
        <Tab eventKey={'detail'} title="User Detail">
          <UserDetailTab match={this.props.match} />
        </Tab>
        <Tab eventKey={'posts'} title="Posts">
          <PostListView match={this.props.match} />
        </Tab>
        <Tab eventKey={'albums'} title="Albums">
          <AlbumListView match={this.props.match} />
        </Tab>
      </Tabs>
    );
  }
}

export default UserDetailView;

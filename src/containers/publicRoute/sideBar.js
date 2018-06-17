import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  getActive(currentPath) {
    const { match: {
      path
    }} = this.props;
    return path.includes(currentPath);
  }
  onMenuClick(path) {
    this.props.history.push(path);
  }
  render() {
    const { match: {
      path
    }} = this.props;
    return (
      <nav>
        <ListGroup>
          <ListGroupItem onClick={() => this.onMenuClick('/posts')} active={this.getActive('/posts')}>Posts <Badge>42</Badge></ListGroupItem>
          <ListGroupItem onClick={() => this.onMenuClick('/users')} active={this.getActive('/users') || path === '/'}>Users <Badge>42</Badge></ListGroupItem>
          <ListGroupItem onClick={() => this.onMenuClick('/albums')} active={this.getActive('/albums')}>Albums <Badge>42</Badge></ListGroupItem>
        </ListGroup>
      </nav>
    );
  }
}
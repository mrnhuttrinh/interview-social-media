import React from 'react';
import PropTypes from 'prop-types';
import { Media, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import MyMapComponent from './myMapComponent';
import './userView.scss';

class UserView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(path) {
    const {
      history
    } = this.context;
    history.push(path);
  }
  render() {
    const { user = {} } = this.props;
    const { address = {}} = user;
    const { geo = {}} = address;
    return (
      <div className="user-view">
        <Media>
          <Media.Left>
            <img  className="avatar" width={245} height={245} src="https://picsum.photos/245/245" alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <p>
              <ListGroup>
                <ListGroupItem><span className="pull-right">User: {user.id}</span>Name: <b>{user.name}</b></ListGroupItem>
                <ListGroupItem>Username: <b>{user.username}</b></ListGroupItem>
                <ListGroupItem>Email: <b>{user.email}</b></ListGroupItem>
                <ListGroupItem>Address: <b>{`${address.street}, ${address.suite}, ${address.city}`}</b></ListGroupItem>
                <ListGroupItem>Zipcode: <b>{address.zipcode}</b></ListGroupItem>
                <ListGroupItem>Location: <b>{`${geo.lat} : ${geo.lng}`}</b></ListGroupItem>
                {
                  (this.props.viewDetail || this.props.viewPosts || this.props.viewAlbums) && (
                    <ListGroupItem>
                      <div className="view-link">
                        {
                          this.props.viewDetail && (
                            <p className="detail" onClick={() => this.onMenuClick(`/users/${user.id}`)}>
                              Detail
                            </p>
                          )
                        }
                        {
                          this.props.viewPosts && (
                            <p className="posts" onClick={() => this.onMenuClick(`/users/${user.id}/posts`)}>
                              Posts <Badge>42</Badge>
                            </p>
                          )
                        }
                        {
                          this.props.viewAlbums && (
                            <p className="albums" onClick={() => this.onMenuClick(`/users/${user.id}/albums`)}>
                              Albums <Badge>42</Badge>
                            </p>
                          )
                        }
                      </div>
                    </ListGroupItem>
                  )
                }
              </ListGroup>
            </p>
          </Media.Body>
        </Media>
        {
          this.props.viewMap && (
            <MyMapComponent
              center={{ lat: parseFloat(geo.lat), lng: parseFloat(geo.lng) }}
            />
          )
        }
      </div>
    );
  }
}

UserView.contextTypes = {
  history: PropTypes.object,
};

export default UserView;

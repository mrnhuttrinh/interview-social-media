import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  PublicRoute,
} from './containers';

import {
  NotFound,
  UserListView,
  UserDetailView,
  AlbumDetailView,
  PostDetailView,
  PostListView,
  AlbumListView,
  PhotoDetailView
} from './components';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={UserListView} />

        <PublicRoute path="/users/:id/:view" component={UserDetailView} />
        <PublicRoute path="/users/:id" component={UserDetailView} />
        <PublicRoute exact path="/users" component={UserListView} />

        <PublicRoute path="/posts/:id" component={PostDetailView} />
        <PublicRoute exact path="/posts" component={PostListView} />

        <PublicRoute path="/albums/:id" component={AlbumDetailView} />
        <PublicRoute exact path="/albums" component={AlbumListView} />

        <PublicRoute exact path="/photos/:id" component={PhotoDetailView} />

        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
};

export default AppRoutes;

import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './header';
import SideBar from './sideBar';
import Content from './content';
import { Loading } from '../../components';

import "./styles.scss";

class PublicRoute extends React.Component {
  getChildContext() {
    return {
      history: this.props.history,
    };
  }
  render() {
    const { component: Component, mainLoading, ...rest } = this.props;
    return <Route {...rest} render={props => (
      <div className="vbox viewport">
        <Header {...props}/>
        <section className="main hbox space-between">
          <SideBar {...props} />
          <Content>
            <Component {...props}/>
            <Loading loading={mainLoading} />
          </Content>
        </section >
      </div>
    )} />
  };
}

PublicRoute.childContextTypes = {
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  mainLoading: state.mainLoading.get('loading'),
});

export default withRouter(connect(mapStateToProps)(PublicRoute));

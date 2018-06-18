import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './header';
import SideBar from './sideBar';
import Content from './content';
import { Loading, DialogView } from '../../components';

import "./styles.scss";

class PublicRoute extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addModalView = this.addModalView.bind(this);
    this.state = {
      ModalView: null
    };
  }
  getChildContext() {
    return {
      history: this.props.history,
      location: this.props.location,
      addModalView: this.addModalView,
    };
  }
  addModalView(ModalView) {
    this.setState({
      ModalView,
    });
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
            {this.state.ModalView}
            <DialogView {...props} />
          </Content>
        </section >
      </div>
    )} />
  };
}

PublicRoute.childContextTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  addModalView: PropTypes.func,
};

const mapStateToProps = (state) => ({
  mainLoading: state.mainLoading.get('loading'),
});

export default withRouter(connect(mapStateToProps)(PublicRoute));

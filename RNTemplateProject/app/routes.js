import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Linking } from 'react-native';
// import { connect } from 'react-redux';
import { Router, Scene, Actions, Stack , Drawer } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { GHamburgerMenu } from './commonComponents'
import LoginComponent from './screens/login';
import { scale } from './utils/resolution'

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  shouldComponentUpdate(/* nextProps,nextState */) { }

  componentDidUpdate(/* prevProps */) { }

  componentWillUnmount() { }

  componentDidCatch(/* error,errorInfo */) { }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Drawer
            key="drawer"
            drawerWidth={scale(320)}
            contentComponent={GHamburgerMenu}
            drawerPosition="right"
            drawerIcon={<Icon name="menu" size={scale(30)} />}
            title='JetPack-React Native'

          >
            <Scene key="launch" component={LoginComponent} initial hideNavBar />
          </Drawer>
        </Stack>
      </Router>
    );
  }
}

export default Routes;

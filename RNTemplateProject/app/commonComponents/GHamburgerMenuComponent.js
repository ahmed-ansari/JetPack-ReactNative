/* **************************\
Component: GHamburgerMenuComponent
Explanation:
This component is used for list item of menu.
============================
Creator: Manick || Date: 2018-09-26
name: this is required for showing the name of menu,
icon: this is required for showing the icon before menu,
\*************************** */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Text,
  ListItem,
  Icon,
  Left,
  Right,
  Body,
  Container,
  Content,
  List,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

/* Custom Imports */
import { AppConstant } from '../appConstants';
import * as hamburgerActions from '../actions/hamburgerActions';
import { scale } from '../utils/resolution';

const styles = StyleSheet.create({
  icon: {
    color: AppConstant.colors.primary,
    height: 24,
    width: 24,
  },
  menuName: {
    color: AppConstant.colors.primaryColor,
    fontSize: AppConstant.fontSize.sixteen,
    lineHeight: AppConstant.lineHeight.twentyFour,
  },
  rightArrow: {
    color: AppConstant.colors.primaryColor,
    height: 24,
    width: 24,
    marginBottom: 20,
  },
});

const GHamburgerLitsItem = ({ name, icon, ...props }) => (
  <ListItem icon noBorder onPress={() => props.onPress(name)}>
    <Left>
      <Button transparent>
        <Icon type="Feather" name={icon} style={styles.icon} />
      </Button>
    </Left>
    <Body>
      <Text style={styles.menuName}>{name}</Text>
    </Body>
    <Right>
      <Icon
        style={styles.rightArrow}
        type="Feather"
        active
        name="chevron-right"
      />
    </Right>
  </ListItem>
);
/*
All the props parameters should be declared here
*/
GHamburgerLitsItem.propTypes = {
  name: PropTypes.any.isRequired,
  icon: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired,
};
/*
Default values for props paramers should be defined here.
*/
GHamburgerLitsItem.defaultProps = {};

class GHamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrawerSelection = this.handleDrawerSelection.bind(this);
  }

  handleDrawerSelection(name) {
    Actions.drawerClose();
    alert(name);

    // this.props.handleDrawerItemSelected()
  }

  render() {
    return (
      <Container>
        <Content>
          {/* <View style={styles.profileContainer}>
            <View>
              <Text style={styles.profileText}>{strings('menu.myProfile')}</Text>
              <Text style={styles.policiesText}>{strings('menu.swipeToSwitch')}</Text>
            </View>
            <Image source={Images.LibertyBackground} style={styles.bgImage} />
          </View>
          <View style={styles.swiperContainer}>
            <Swiper
              style={styles.swiper}
              removeClippedSubViews={false}
              activeDotColor={AppConstant.colors.primary}
            >
              {this.state.cards.map((item, i) => (
                <GMenuSwiperItem
                  cardImage={item.cardImage}
                  policyNo={item.policyNo}
                  insuredName={item.insuredName}
                  cardNo={item.cardNo}
                  effectDate={item.effectDate}
                  effectDate2={item.effectDate2}
                  key={i}
                />
            ))}
            </Swiper>
          </View> */}
          <View style={styles.menuContainer}>
            <List
              dataArray={this.props.menus}
              renderRow={item => (
                <GHamburgerLitsItem
                  name={item.name}
                  icon={item.icon}
                  onPress={this.handleDrawerSelection}
                />
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

GHamburgerMenu.propTypes = {
  menus: PropTypes.array.isRequired,
  handleDrawerItemSelected: PropTypes.func.isRequired,
};
/*
Default values for props paramers should be defined here.
*/
GHamburgerMenu.defaultProps = {};

const mapStateToProps = (state /* , props */) => {
  return {
    menus: state.initialState.sideMenuList,
  };
};

const mapDispatchToProps = {
  ...hamburgerActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GHamburgerMenu);

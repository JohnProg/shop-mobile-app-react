import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import ProductsList from './ProductsList';
//import ServiceDetail from './ServiceDetail';
//import ServiceBookingDay from './ServiceBookingDay';


export default class Products extends Component {
  constructor(props){
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'Prodotti'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }

  renderScene (route, navigator) {
    //const mainNavigator = this.props.navigator;

    //if (route.detail) {
      //return (
        //<ServiceDetail
          //serviceId={route.serviceId}
          //servicesNavigator={navigator}
        //>
        //</ServiceDetail>
      //);
    //}

    //if (route.bookingDay) {
      //console.info(route)
      //return (
        //<ServiceBookingDay
          //serviceId={route.serviceId}
          //servicesNavigator={navigator}
          //bookingDate={route.bookingDate}
        //>
        //</ServiceBookingDay>
      //);
    //}



    return <ProductsList servicesNavigator={navigator} path={route.path} />;
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },

  navBar: {
    backgroundColor: '#000',
  },
  navBarText: {
    fontSize: 16,
    //marginVertical: 10,

  },
  navBarTitleText: {
    color : '#fff',
    fontWeight: '500',
    //marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },

});


var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

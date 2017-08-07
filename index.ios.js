/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SvgShadowPOC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 100, height: 30, backgroundColor: "red", marginLeft: 50 }} />
          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('SvgShadowPOC', () => SvgShadowPOC);

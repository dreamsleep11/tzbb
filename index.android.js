/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './js/src/App';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class tzbb extends Component {
  render() {
    return (
      <App/>
    );
  }
}
AppRegistry.registerComponent('tzbb', () => tzbb);


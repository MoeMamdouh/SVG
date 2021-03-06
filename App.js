import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Root } from 'native-base';

import Home from './src/screens/Home';

const { width, height } = Dimensions.get('screen');

export default class SvgExample extends Component {
  render() {
    return (
      <Root>
        <Home />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b7b7b7',
  },
});

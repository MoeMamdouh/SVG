import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
import Cow from './src/components/CowSVG';

const { width, height } = Dimensions.get('screen');

export default class SvgExample extends Component {
  static title = 'Tap the shapes to change state';

  render() {
    return (
      <View style={styles.container}>
        <Cow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  border: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

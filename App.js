import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
import {
  Container,
  Header,
  Content,
  Button,
  Drawer,
  Left,
  Right,
  Icon,
  Body,
  Title,
  Toast,
} from 'native-base';
import Cow from './src/components/CowSVG';

const { width, height } = Dimensions.get('screen');

export default class SvgExample extends Component {
  static title = 'Tap the shapes to change state';

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text>asdasdasd</Text>
          </View>
        }
        openDrawerOffset={0.3}
        panCloseMask={0.3}
        // content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header noLeft>
            <Left>
              <Button transparent>
                <Icon name="menu" onPress={this.openDrawer} />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>Cancel</Text>
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Cow />
            <Button
              onPress={() =>
                Toast.show({
                  text: 'Wrong password!',
                  buttonText: 'Okay',
                  buttonTextStyle: { color: '#008000' },
                  buttonStyle: { backgroundColor: '#5cb85c' },
                })
              }
            >
              <Text>Toast</Text>
            </Button>
          </Content>
        </Container>
      </Drawer>
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

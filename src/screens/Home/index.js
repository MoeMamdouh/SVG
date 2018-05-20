import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
import Cow from './../../components/CowSVG';

const { width, height } = Dimensions.get('screen');

export default class Home extends Component {
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
          <View style={{ flex: 1, backgroundColor: '#5cb85c' }}>
            <Text>asdasdasd</Text>
          </View>
        }
        openDrawerOffset={0.3}
        panCloseMask={0.3}
        // content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
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
                <Icon name="bulb" />
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Cow />
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

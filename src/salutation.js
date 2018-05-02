import React, { Component } from 'react';
import { AppRegistry, Text, View, Image} from 'react-native';

class Salutation extends Component {
    render() {
      return (
        <Text>Hello {this.props.name} ! </Text>
      );
    }
  }
  
  class GreatSalutation extends Component {
    render() {
      return (
        <View style={{alignItems:'center'}}>
          <Salutation name='Salutation1' />
          <Salutation name='Salutation2' />
        </View>
      );
    }
  }
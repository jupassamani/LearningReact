import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionExample extends Component {
  render() {
    return (
      //Set the flexDirection to column
      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'steelblue'}} />
      </View>
    );
  }
}

export default FlexDirectionExample;
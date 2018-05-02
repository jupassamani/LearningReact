import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyingContent extends Component {
  render() {
    return (
      // set the justifyContent to center
      // set the flexDirection to column
      <View style={{
        flex:1, 
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'steelblue'}} />
      </View>
    );
  }
}

export default JustifyingContent;
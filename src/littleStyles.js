import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class NumerousStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}> a red </Text>
        <Text style={styles.bigblue}> a bigblue </Text>
        <Text style={[styles.bigblue, styles.red]}> a bigblue and red </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 30
  },
  red: {
    color:'red'
  }
});

export default NumerousStyles;
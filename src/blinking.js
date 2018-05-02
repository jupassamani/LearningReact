import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

class BlinkText extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state after each secon
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  render() {
    let display = this.state.showText?this.props.text:'';
    return (
      <Text>{display}</Text>
    );
  }
}
//export default BlinkText;

class Blink extends Component {
  render(){
    return (
      <View>
        <BlinkText text='This is a blinking text'/>
        <BlinkText text='Blinking is a nice feature' />
      </View>
    );
  }
}
//export default Blink;
//AppRegistry.registerComponent('BlinkApp', () => Blink);

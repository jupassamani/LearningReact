/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image} from 'react-native';

class DisplayImage extends Component {

  render() {

    let picture = {
      uri: 'https://img.elo7.com.br/product/main/1B8637C/painel-bob-esponja-2-00-x-1-00m-decorativos-para-festa.jpg'
    };

    return (
      <Image source={picture} style={{width:193, height:110}} />
    );
  }
}

//AppRegistry.registerComponent('DisplayImage', () => DisplayImage);

export default DisplayImage;
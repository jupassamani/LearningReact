/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import { AppRegistry, View, Text, ListView } from 'react-native';

class ListViewExample extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

    this.state = { 
      dataSource: ds.cloneWithRows([
        'Julia', 'Bruna', 'Ligia', 'Jorge', 'Rosi'
      ])

     };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default ListViewExample;
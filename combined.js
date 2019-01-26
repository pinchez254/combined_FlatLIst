import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      Data2: '',
    };
  }

  componentDidMount() {
  //provide end point url 
  const url  = ''
    return fetch({url})
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.entries,
            Data2: responseJson.entries,
            Data3: responseJson.entries,
          },
          () => {
            this._SpliceArray();
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _SpliceArray = () => {
    const Data1 = this.state.dataSource;
    const data2 = { name: 'Data2' };
    const data3 = { name: 'Data2' };
    Data1.splice(2, 0, data2);
    Data1.splice(6, 0, data3);

    this.setState({
      maindata: Data1,
    });
    console.log(Data1);
  };

  _renderMain = ({ item, index }) => {
    if (item.name !== 'Data2') {
      return (
        <View style={styles.mainItem}>
          <Text>{item.name}</Text>
        </View>
      );
    }
    if (item.name === 'Data2') {
      return (
        <View style={styles.list}>
          <FlatList
            extraData={this.state}
            data={this.state.Data2}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderHorizontalItem}
            horizontal={true}
          />
        </View>
      );
    }
  };
  keyExtractor = (item, index) => {
    return index.toString();
  };

  renderHorizontalItem = ({ item }) => {
    return (
      <View style={styles.horizontalItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.maindata}
          renderItem={this._renderMain}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainItem: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'yellow',
  },
  horizontalItem: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: 'blue',
  },
  list: {
    height: 80,
    marginHorizontal: 5,
  },
});

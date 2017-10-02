import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    this.state = {date: new Date()}
    return (
      <View style={styles.container}>
        <Text>{this.state.date.toString()}!</Text>
        <Text>Dude! This is my app!</Text>
      </View>
    );
  }
}

componentDidMount(){
  this.timerID = setInterval(
    () => this.tick(), 
    1000
    );
}

tick(){
  this.setState({
    date: new Date()
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

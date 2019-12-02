import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import StatusCards from './statusCards'
import ToDoCards from './toDoCards'
import DealCards from './dealCards'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backView}>
        <StatusCards />
        <ToDoCards />
        <DealCards navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    backgroundColor: '#ddeeff'
  },
  cardTitle: {
    marginLeft: 30,
    marginTop: 50
  }
})

export default HomeScreen;

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';

class App extends Component {
  state = {
    cari: '',
  };
  firstnameTextChange = inputText => {
    this.setState({cari: inputText});
  };
  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={this.firstnameTextChange}
          placeholder="cari pesanan"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;

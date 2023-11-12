import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Imageheader} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Imageheader} style={styles.header} />
      <View style={styles.hello}>
        <Text style={styles.selamat}> selamat datang </Text>
        <Text style={styles.username}>JT online</Text>
      </View>
      <ImageBackground />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeigt = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeigt * 0.3,
    paddingHorizontal: 100,
    paddingTop: 10,
  },
  hello: {
    position: 'absolute',
    top: 1,
    textAlign: 'center',
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Imageheader, logo} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Imageheader} style={styles.header} />
      <Image source={logo} style={styles.logo} />
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
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeigt * 0.3,
  },
});

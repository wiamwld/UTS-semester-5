import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Imageheader, lugu} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Imageheader} style={styles.header} />
      <Image source={lugu} style={styles.lugu} />
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
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  hello: {
    marginTop: windowHeigt * 0.03,
    width: windowWidth * 1,
    height: windowHeigt * 1,
  },
  selamat: {
    fontSize: 24,
  },
  username: {
    fontSize: 20,
  },
});

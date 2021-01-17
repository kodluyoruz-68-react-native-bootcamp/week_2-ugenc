import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export default function TodoEmpty() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/confetti.png')} />
      <Text style={styles.text}>Nothing Tudu!</Text>
      <Text style={styles.textSmall}>Start with adding new item!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
  },
  text: {
    textAlign: 'center',
    paddingTop: 60,
    fontSize: 30,
    fontWeight: '700',
    color: 'lightgray',
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,

    fontWeight: '500',
    color: 'lightgray',
  },
  image: {
    alignSelf: 'center',
    tintColor: 'lightgray',
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
});

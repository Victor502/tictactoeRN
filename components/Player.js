import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Player = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.player}>{props.player}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  player: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3ed899',
  },
});

export default Player;

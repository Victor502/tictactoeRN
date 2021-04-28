import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Board from './Board';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Tic Tac Toe</Text>
      <View>
        <Board />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    marginVertical: 40,
    color: '#0f2b2a',
  },
});

export default GameScreen;

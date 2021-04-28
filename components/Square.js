import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Player from './Player';

const Square = props => {
  const marker = (row, col) => {
    let value = props && props.board && props.board[row][col];
    switch (value) {
      case 1:
        return <Player player={'X'} />;
      case 5:
        return <Player player={'O'} />;
      default:
        return <View />;
    }
  };
  return (
    <View>
      <Pressable
        onPress={() => props.onPress(props.rowCol[0], props.rowCol[1])}
        style={[styles.boxSize, props.style]}>
        {marker(props.rowCol[0], props.rowCol[1])}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  boxSize: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Square;

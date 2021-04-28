import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <SafeAreaView styles={styles.mainContainer}>
      <GameScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;

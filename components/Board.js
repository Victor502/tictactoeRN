import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import Square from "./Square.js";

const Board = () => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [playerTurn, setPlayersTurn] = useState(1);

  const resetGame = () => {
    setPlayersTurn(1);
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  const winnerAlert = (winner) => {
    Alert.alert("The Winner is...", winner, [
      {
        text: "OK",
        onPress: () => resetGame(),
      },
    ]);
  };

  const playerMove = (row, col) => {
    // fixes changing of marker after set
    const ownsSquare = board[row][col];
    if (ownsSquare) {
      return;
    }
    let boardArray = [...board];
    boardArray[row][col] = playerTurn;
    setBoard(boardArray);
    // changes players turn
    setPlayersTurn(playerTurn === 1 ? 5 : 1);

    const gameWinner = checkBoard();

    if (gameWinner === 1) {
      winnerAlert("Player 1");
    } else if (gameWinner === 2) {
      winnerAlert("Player 2");
    }
  };

  const checkBoard = () => {
    let total;
    // loop over rows
    for (let i = 0; i < 3; i++) {
      total = board[i][0] + board[i][1] + board[i][2];
      if (total === 3) {
        return 1;
      } else if (total === 15) {
        return 2;
      }
    }
    // loop over columns
    for (let i = 0; i < 3; i++) {
      total = board[0][i] + board[1][i] + board[2][i];
      if (total === 3) {
        return 1;
      } else if (total === 15) {
        return 2;
      }
    }
    // loop over diagonal
    total = board[0][0] + board[1][1] + board[2][2];
    if (total === 3) {
      return 1;
    } else if (total === 15) {
      return 2;
    }
    // loop over diagonal
    total = board[2][0] + board[1][1] + board[0][2];
    if (total === 3) {
      return 1;
    } else if (total === 15) {
      return 2;
    }
    return 0;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Square
          onPress={playerMove}
          style={styles.left}
          rowCol={[0, 0]}
          board={board}
        />
        <Square
          onPress={playerMove}
          style={styles.topMiddle}
          rowCol={[0, 1]}
          board={board}
        />
        <Square
          onPress={playerMove}
          style={styles.right}
          rowCol={[0, 2]}
          board={board}
        />
      </View>
      <View style={styles.row}>
        <Square
          onPress={playerMove}
          style={styles.left}
          rowCol={[1, 0]}
          board={board}
        />
        <Square
          onPress={playerMove}
          style={styles.topMiddle}
          rowCol={[1, 1]}
          board={board}
        />
        <Square
          onPress={playerMove}
          style={styles.right}
          rowCol={[1, 2]}
          board={board}
        />
      </View>
      <View style={styles.row}>
        <Square
          onPress={playerMove}
          style={styles.bottomRight}
          rowCol={[2, 0]}
          board={board}
        />
        <Square onPress={playerMove} rowCol={[2, 1]} board={board} />
        <Square
          onPress={playerMove}
          style={styles.bottomLeft}
          rowCol={[2, 2]}
          board={board}
        />
      </View>
      <View style={styles.buttonContainerStyle}>
        <Button
          title="Start Over"
          color={"#0f2b2a"}
          onPress={() => resetGame()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  boxSize: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    borderRightWidth: 2,
    borderRightColor: "#0f2b2a",
    borderBottomWidth: 2,
    borderBottomColor: "#0f2b2a",
  },
  topMiddle: {
    borderBottomWidth: 2,
    borderBottomColor: "#0f2b2a",
  },
  right: {
    borderLeftWidth: 2,
    borderLeftColor: "#0f2b2a",
    borderBottomWidth: 2,
    borderBottomColor: "#0f2b2a",
  },
  bottomLeft: {
    borderLeftWidth: 2,
    borderLeftColor: "#0f2b2a",
  },
  bottomRight: {
    borderRightWidth: 2,
    borderRightColor: "#0f2b2a",
  },
  buttonContainerStyle: {
    backgroundColor: "#e5fbee",
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 50 / 2,
    borderColor: "#3ed899",
  },
});

export default Board;

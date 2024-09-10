import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles'; // Importa os estilos do arquivo separado

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Estado inicial do tabuleiro
  const [isXTurn, setIsXTurn] = useState(true); // Controle de turno (X ou O)

  const handlePress = (index) => {
    // Se a célula já foi clicada ou o jogo terminou, não faz nada
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O'; // Define X ou O na célula clicada
    setBoard(newBoard);
    setIsXTurn(!isXTurn); // Alterna o turno
  };

  const renderSquare = (index) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
        <Text style={styles.squareText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Retorna o vencedor (X ou O)
      }
    }
    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null); // Verifica se todas as células estão preenchidas
  };

  const winner = calculateWinner(board);

  // Verifica se há vencedor ou empate
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isBoardFull(board)) {
    status = 'Empate!'; // Tabuleiro cheio e sem vencedor
  } else {
    status = `Próximo jogador: ${isXTurn ? 'X' : 'O'}`;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reinicia o tabuleiro
    setIsXTurn(true); // X começa
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

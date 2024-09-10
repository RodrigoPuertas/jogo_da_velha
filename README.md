# Jogo da Velha em React Native

Este projeto é uma implementação simples do **Jogo da Velha** (Tic-Tac-Toe) desenvolvido com **React Native**. O jogo permite que dois jogadores (X e O) alternem turnos em um tabuleiro 3x3. O jogo identifica automaticamente o vencedor ou exibe "Empate" caso todas as células estejam preenchidas sem um vencedor.

## Visão Geral

- **Tabuleiro**: Um grid 3x3 onde os jogadores alternam entre X e O.
- **Status**: Exibe o status atual do jogo, incluindo o vencedor ou "Empate".
- **Reiniciar Jogo**: Permite reiniciar o jogo para começar uma nova partida.

## Funcionalidades

- **Gerenciamento de Estado**: Usa `useState` para controlar o estado do tabuleiro e os turnos dos jogadores.
- **Controle de Turnos**: Alterna entre X e O conforme os jogadores fazem suas jogadas.
- **Detecção de Vencedor**: Verifica todas as combinações possíveis para determinar o vencedor.
- **Empate**: Identifica se o jogo terminou em empate quando o tabuleiro está cheio e não há vencedor.
- **Reinício do Jogo**: Oferece a opção de reiniciar o jogo.

## Estrutura do Projeto

- **`App.js`**: Contém a lógica principal do jogo, incluindo a renderização do tabuleiro e o controle de jogadas.
- **`Styles.js`**: Define os estilos para o layout e a aparência do jogo.

## Dependências

- React Native


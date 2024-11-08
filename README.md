# Created using React

This project is live here [Super XOX](https://theflameguy.github.io/SuperXOX/).

**Super Tic-Tac-Toe** (also known as **Ultimate Tic-Tac-Toe**) is a more complex variant of the traditional Tic-Tac-Toe game. It involves playing on a larger grid, which consists of 9 smaller 3x3 Tic-Tac-Toe boards. The game has the following rules:

### 1. **Board Setup**:
   - The game is played on a 9x9 grid, divided into 9 smaller 3x3 grids (each grid is a standard Tic-Tac-Toe board).
   - Players are assigned either **X** or **O**.

### 2. **Gameplay**:
   - Players take turns placing their marks (X or O) on one of the 81 cells in the larger grid.
   - **The twist**: The location where a player places their mark on the current board determines which smaller 3x3 board the opponent must play on next.

### 3. **Rules for Movement**:
   - On the first move, the player can place their mark anywhere on the large 9x9 grid.
   - After that, the player's move determines the "target" smaller board for the next player. For example:
     - If a player places their mark in the top-right cell of any smaller board, the opponent must place their mark on the corresponding cell of the **top-right** small 3x3 grid (within the larger 9x9 grid).
     - If a player places a mark in the center of a small 3x3 board, the opponent must play in the center of one of the 9 smaller boards (if available).
     - If a player places a mark in the bottom-right corner of any small board, the opponent must play in the bottom-right 3x3 grid on the larger board.

### 4. **Winning a Small Grid**:
   - A player wins a small 3x3 grid by getting three marks in a row (horizontally, vertically, or diagonally), just like regular Tic-Tac-Toe.
   - When a small grid is won, the winning player’s mark is placed in the corresponding larger grid cell, which is also considered "controlled" by that player.

### 5. **Winning the Game**:
   - The overall winner is the first player to win 3 of the smaller 3x3 grids in a row (either horizontally, vertically, or diagonally).
   - The game ends when a player controls 3 smaller boards in a row on the larger grid.

### 6. **Special Cases**:
   - If a player is forced to play in a board that has already been won or is full, they can choose any open cell on the remaining available boards.
   - If a player wins a small board and the corresponding large grid cell is already taken, they can choose another valid move.

---

This adds an extra layer of strategy and complexity to the game, as players need to think not only about winning small boards but also about how to control the larger grid and limit their opponent's options.

Let me know if you'd like any more details or examples!
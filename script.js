const CELLS = document.querySelectorAll(".cells");
const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let currentPlayer = "X";
  let gameEnd = false;
  
  CELLS.forEach(cell => {
    cell.addEventListener("click", () => {
      if (gameEnd) {
        return;
      }
      if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        if (checkWin()) {
          gameEnd = true;
          alert(`${currentPlayer} es el ganador!`);
        } else if (checkTie()) {
          gameEnd = true;
          alert("Excelente juego, es un empate!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });
  
  function checkWin() {
  //en base a nuestra constante winConditions verificamos si la posición del tablero muestra alguna victoria.
    return WIN_CONDITIONS.some(condition => {
      return condition.every(index => {
        return CELLS[index].textContent === currentPlayer;
      });
    });
  }
  
  function checkTie() {
  //en base a nuestras celdas del tablero verificamos que todas las celdas estén ocupadas por alguna ficha.
    return Array.from(CELLS).every(cell => {
      return cell.textContent !== "";
    });
  }
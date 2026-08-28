const SIZE = 8;
const MINES = 10;

let board;
let gameOver;

const gridEl = document.getElementById("grid");
const statusEl = document.getElementById("status");

function init() {
  gameOver = false;
  statusEl.textContent = "";
  board = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => ({
      mine: false,
      count: 0,
      revealed: false,
      flagged: false,
    })),
  );

  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * SIZE);
    const c = Math.floor(Math.random() * SIZE);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      placed++;
    }
  }

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      board[r][c].count = neighbors(r, c).filter(
        ([nr, nc]) => board[nr][nc].mine,
      ).length;
    }
  }

  render();
}

function neighbors(r, c) {
  const out = [];
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE) out.push([nr, nc]);
    }
  }
  return out;
}

function render() {
  gridEl.innerHTML = "";
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (!board[r][c].revealed) {
        if (board[r][c].flagged) cell.textContent = "🚩";
        if (gameOver && board[r][c].mine) {
          cell.textContent = "💣";
          cell.classList.add("revealed", "mine");
        }
      } else {
        cell.classList.add("revealed");
        if (board[r][c].mine) {
          cell.textContent = "💣";
          cell.classList.add("mine");
        } else if (board[r][c].count > 0) {
          cell.textContent = board[r][c].count;
          cell.classList.add("n" + board[r][c].count);
        }
      }

      cell.addEventListener("click", () => handleClick(r, c));
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        handleFlag(r, c);
      });
      gridEl.appendChild(cell);
    }
  }
}

function reveal(r, c) {
  if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return;
  if (board[r][c].revealed) return;
  if (board[r][c].mine) return;

  board[r][c].revealed = true;

  if (board[r][c].count === 0) {
    neighbors(r, c).forEach(([nr, nc]) => reveal(nr, nc));
  }
}

function handleClick(r, c) {
  if (gameOver || board[r][c].revealed || board[r][c].flagged) return;

  if (board[r][c].mine) {
    gameOver = true;
    statusEl.textContent = "Game over!";
    board[r][c].revealed = true;
    render();
    return;
  }
  reveal(r, c);

  const safeLeft = board.flat().filter((cell) => !cell.mine && !cell.revealed).length;
  if (safeLeft === 0) {
    gameOver = true;
    statusEl.textContent = "You win!";
  }

  render();
}

function handleFlag(r, c) {
  if (gameOver || board[r][c].revealed) return;
  board[r][c].flagged = !board[r][c].flagged;
  render();
}

init();

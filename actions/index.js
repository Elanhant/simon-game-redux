const NEW_GAME = 'NEW_GAME';

function newGame(id) {
  return {
    type: NEW_GAME,
    payload: {
      id
    }
  }
}

const NEW_ROUND = 'NEW_ROUND';

function newRound(id) {
  return {
    type: NEW_ROUND,
    payload: {
      id
    }
  }
}

const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';

function changeDifficulty(difficulty) {
  return {
    type: CHANGE_DIFFICULTY,
    payload: {
      difficulty
    }
  }
}

const SQUARE_CLICK = 'SQUARE_CLICK';

function squareOnClick(id) {
  return {
    type: SQUARE_CLICK,
    payload: {
      id
    }
  }
}

const ANIMATE_SQUARE = 'ANIMATE_SQUARE';

function animateSquare(id) {
  return {
    type: ANIMATE_SQUARE,
    payload: {
      id
    }
  }
}

const ANIMATE_CLEAR = 'ANIMATE_CLEAR';

function clearAnimation() {
  return {
    type: ANIMATE_CLEAR
  }
}

const ENABLE_CONTROLS = 'ENABLE_CONTROLS';

function enableControls() {
  return {
    type: ENABLE_CONTROLS
  }
}

const FAILED = 'FAILED';

function failed() {
  return {
    type: FAILED
  }
}

export default {
  squareOnClick,
  newRound,
  animateSquare,
  clearAnimation,
  enableControls,
  failed,
  changeDifficulty,
  newGame,
  SQUARE_CLICK,
  NEW_GAME,
  NEW_ROUND,
  ANIMATE_SQUARE,
  ANIMATE_CLEAR,
  ENABLE_CONTROLS,
  FAILED,
  CHANGE_DIFFICULTY
};

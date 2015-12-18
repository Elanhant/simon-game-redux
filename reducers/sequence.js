import * as ActionTypes from '../actions';

const initState = {
  list: [],
  copy: [],
  difficulty: 1,
  round: 0,
  active: true,
  newRound: false,
  enableControls: false
};

export default function sequence(state = initState, action) {
  const id = action.payload ? action.payload.id : null;
  let newList, copy;

  switch (action.type) {
    case ActionTypes.NEW_GAME:
      return Object.assign({}, initState, {
        difficulty: state.difficulty,
        round: 0
      });
    case ActionTypes.NEW_ROUND:
      newList = [].concat(state.list);
      newList.push(id);
      copy = newList.slice(0);

      return Object.assign({}, state, {
        list: newList,
        copy,
        round: state.round + 1,
        newRound: true,
        active: true
      });
    case ActionTypes.SQUARE_CLICK:
      newList = [].concat(state.copy);
      const shouldBe = newList.shift();

      return Object.assign({}, state, {
        copy: newList,
        active: shouldBe == id
      });
    case ActionTypes.ENABLE_CONTROLS:
      return Object.assign({}, state, {
        enableControls: true,
        newRound: false
      });
    case ActionTypes.FAILED:
      return Object.assign({}, state, {
        enableControls: false
      });
    case ActionTypes.CHANGE_DIFFICULTY:
      return Object.assign({}, initState, {
        difficulty: action.payload.difficulty,
      });
    default:
      return state;
  }
}

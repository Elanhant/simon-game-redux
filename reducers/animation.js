import * as ActionTypes from '../actions';

const AnimationSpeeds = {
  1: 1400,
  2: 1000,
  3: 400
};

const initState = {
  id: null,
  key: 0,
  speed: AnimationSpeeds[1]
};

export default function animation(state = initState, action) {
  const id = action.payload ? action.payload.id : null;

  switch (action.type) {
    case ActionTypes.ANIMATE_SQUARE:
      return Object.assign({}, state, {
        id: id,
        key: state.key + 1
      });
      break;
    case ActionTypes.ANIMATE_CLEAR:
      return Object.assign({}, initState, {
        speed: state.speed
      });
      break;
    case ActionTypes.CHANGE_DIFFICULTY:
      return Object.assign({}, initState, {
        speed: AnimationSpeeds[action.payload.difficulty]
      });
      break;
    default:
      return state;
  }
}

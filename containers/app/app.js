import React                  from 'react';
import ReactDom               from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as Actions           from '../../actions';
import AudioComponent         from 'audio';
import MainComponent          from 'main';
import SelectComponent        from 'select';
import SquareComponent        from 'square';
import SquaresComponent       from 'squares';
import StartButtonComponent   from 'startButton';

@connect(
  state => ({
    list: state.sequence.list,
    copy: state.sequence.copy,
    round: state.sequence.round,
    active: state.sequence.active,
    enableControls: state.sequence.enableControls,
    difficulty: state.sequence.difficulty,
    newRound: state.sequence.newRound,
    animation: state.animation
  }),
  dispatch => ({
    actions: bindActionCreators({
      ...Actions
    }, dispatch)
  })
)
export default class AppContainer extends React.Component {
  interval = null;

  componentWillReceiveProps(nextProps) {
    if (nextProps.copy.length === 0 && nextProps.active) {
      this.props.actions.newRound(getRandom());
    } else if (!nextProps.active) {
      this.props.actions.failed();
      clearInterval(this.interval);
    }
    if (!this.props.newRound && nextProps.newRound) {
      clearInterval(this.interval);
      setTimeout(() => {
        this.runAnimation(nextProps.list, nextProps.animation.speed)
      }, 500);
    }
  }

  runAnimation(sequence, speed) {
    let i = 0;
    this.interval = setInterval(() => {
      if (i < sequence.length) {
        const id = sequence[i];
        const audioEl = ReactDom.findDOMNode(this.refs[`audio${id}`]);
        setTimeout(() => audioEl.play(), audioEl.duration - audioEl.currentTime);

        this.props.actions.animateSquare(null);
        this.props.actions.animateSquare(id);
        i++;
      } else {
        this.props.actions.clearAnimation();
        this.props.actions.enableControls();
        clearInterval(this.interval);
      }
    }, speed)
  }

  handleDifficultyChange(e) {
    this.props.actions.changeDifficulty(e.target.value);
    this.props.actions.newGame();
  }

  handleClick(id) {
    if (this.props.enableControls) {
      ReactDom.findDOMNode(this.refs[`audio${id}`]).play();
      this.props.actions.animateSquare(id);
      this.props.actions.squareOnClick(id);
      setTimeout(() => this.props.actions.clearAnimation(), this.props.animation.speed);
    }
  }

  startNewGame() {
    this.props.actions.newGame();
    this.props.actions.newRound(getRandom());
  }

  render() {
    const { active, difficulty, round, animation } = this.props;

    return (
      <MainComponent>
        <h2>{round > 0 ? `Round ${round}` : 'Game not started'}</h2>
        <SelectComponent name="difficulty" onChange={(e) => this.handleDifficultyChange(e)} defaultValue={difficulty} >
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </SelectComponent>
        <SquaresComponent failed={!active} >
          { [1, 2, 3, 4].map( id => (
            <SquareComponent
              key={id}
              color={id}
              onClick={() => this.handleClick(id)}
              active={id == animation.id}
              animationSpeed={animation.speed}
            />
          ))}
        </SquaresComponent>
        <StartButtonComponent onClick={() => this.startNewGame()}>Start game</StartButtonComponent>
        <AudioComponent ref="audio1" audioFileNumber="1" />
        <AudioComponent ref="audio2" audioFileNumber="2" />
        <AudioComponent ref="audio3" audioFileNumber="3" />
        <AudioComponent ref="audio4" audioFileNumber="4" />
      </MainComponent>
    );
  }
}

const getRandom = () => Math.floor((Math.random()*4)+1);

import React from 'react';

export default class Audio extends React.Component {
  render() {
    const { audioFileNumber = null } = this.props;

    return audioFileNumber && (
      <audio>
        <source src={`components/audio/sounds/${audioFileNumber}.ogg`} type="audio/ogg" />
        <source src={`components/audio/sounds/${audioFileNumber}.mp3`} type="audio/mp3" />
      </audio>
    );
  }
}

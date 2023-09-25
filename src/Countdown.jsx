import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Countdown = () => {
    return (
    <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  );

}

export default Countdown;
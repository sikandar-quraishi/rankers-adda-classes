import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';

import './index.scss';

export default function Timer(props) {
  const [timeAlloted, setTimeAlloted] = useState(props.totalTime);
  const [timer, setTimer] = useState({
    h: '00',
    m: '00',
    s: '00'
  });

  let intervalID = null;

  const startTimer = () => {
    let totalTime = timeAlloted;

    if(totalTime > 0) {
      intervalID = setInterval(() => {
        totalTime -= 1;

        setTimer({
          h: ((Math.floor(totalTime / 3600)).toString()).padStart(2, "0"),
          m: ((Math.floor(totalTime % 3600 / 60)).toString()).padStart(2, "0"),
          s: ((Math.floor(totalTime % 3600 % 60)).toString()).padStart(2, "0")
        });

        setTimeAlloted(totalTime);
        props.updateTimer(totalTime);

        if (totalTime <= 0) {
          clearInterval(intervalID);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Aux>
      <span className="timer">
        <Badge variant="light">{timer.h}</Badge> : <Badge variant="light">{timer.m}</Badge> : <Badge variant="light">{timer.s}</Badge>
      </span>
    </Aux>
  );
};
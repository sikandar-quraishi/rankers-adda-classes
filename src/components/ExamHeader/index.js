import React from 'react';
import { Figure } from 'react-bootstrap';
import Timer from '../Timer';

function ExamHeader(props) {
  return (
    <div className="d-flex align-items-center justify-content-start position-relative fs-14">
      <Figure className="my-0 mr-3">
        <Figure.Image
          width={50}
          height={50}
          alt="50x50"
          src={props.user.avatar}
          className="m-0"
        />
      </Figure>
      <div
        className="d-flex flex-column align-items-start justify-content-center position-relative fs-14"
        style={{ lineHeight: 1.2 }}
      >
        <div>
          <strong>Name: </strong><span>{props.user.name}</span>
        </div>
        <div>
          <strong>Exam Name: </strong><span>{props.examData.examName}</span>
        </div>
        <div>
          <strong>Subject: </strong><span>{props.examData.examName}</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start justify-content-center position-relative fs-18 ml-auto">
        <div>
          <span className="fs-14">Remaining Time: </span><span><Timer totalTime={props.examData.totalTime} updateTimer={(val) => props.updateExamTimer(val)} /></span>
        </div>
      </div>
    </div>
  );
}

export default ExamHeader;
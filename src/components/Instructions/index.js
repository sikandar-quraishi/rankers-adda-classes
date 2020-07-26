import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { Card, Table, Button } from 'react-bootstrap';
import { Checkbox } from 'pretty-checkbox-react';
import CheckIcon from 'mdi-react/CheckIcon';

import Aux from '../../hoc/_Aux';

import './index.scss';

function Instructions(props) {
  const [ready, setReady] = useState(false);

  return (
    <Aux>
      <Card border="light">
        <Card.Header>
          <span className="fs-24">General Instructions</span>
        </Card.Header>
        <Card.Body>
          <div className="d-flex flex-column align-items-stretch justify-content-center py-4 position-relative fs-14">
            <div>
              <p><strong>Please read the following instructions very carefully:</strong></p>
            </div>
            <div>
              <Table bordered>
                <thead className="thead-light">
                  <tr>
                    <th className="fw-400 fs-14">S. No.</th>
                    <th className="fw-400 fs-14">Subjects</th>
                    <th className="fw-400 fs-14">No. of Questioins</th>
                    <th className="fw-400 fs-14">Marks</th>
                    <th className="fw-400 fs-14">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>{props.examData.examType}</td>
                    <td>{props.examData.totalQuestions}</td>
                    <td>{props.examData.totalMarks}</td>
                    <td>{(Math.floor(props.examData.totalTime / 60))} Mins</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="instructions">
              <ol>
                <li>You have  <strong>{(Math.floor(props.examData.totalTime / 60))} Minutes</strong> to complete the test.</li>
                <li>The test contains a total of<strong> {props.examData.totalQuestions} questions</strong></li>
                <li>There is only one correct answer to each question. Click on the most appropriate option to mark it as your answer.</li>
                <li>You will be awarded <strong>one mark </strong>for each correct answer.</li>
                <li>There is <strong>{props.examData.negativeMark} penalty</strong> mark for each wrong answer</li>
                <li>You can unmark your answer by clicking on the “<strong>Clear Response</strong>” button.</li>
                <li>A Number list of all questions appears at the right hand side of the screen. You can access the questions in any order within a section or across sections by clicking on the question number given on the number list.</li>
                <li> Do not click the button <strong>"Submit test" </strong>before completing the test. A test once submitted cannot be resumed.</li>
              </ol>
            </div>
            <div>
              <Checkbox
                color="success"
                icon={<CheckIcon />}
                onChange={() => setReady(!ready)}
              >
                I've read all the instructions carefully and abide by them.
              </Checkbox>
            </div>
            <div className="mt-4">
              <Button
                variant={ready ? 'primary' : 'secondary'}
                size="lg"
                disabled={!ready}
                onClick={() => props.setExamState(1)}
              >
                Start Test
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    examData: state.questionReducer.examData,
    examState: state.questionReducer.examState
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setExamState: (payload) => dispatch({ type: actionTypes.SET_EXAM_STATE, payload: payload })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
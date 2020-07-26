import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { Card, Row, Col } from 'react-bootstrap';

import ExamHeader from '../ExamHeader';
import ExamQuestion from '../ExamQuestion';
import ExamSummary from '../ExamSummary';
import ExamQuestionIndexes from '../ExamQuestionIndexes';

import Aux from '../../hoc/_Aux';

import './index.scss';

class Exam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
    // this.startTimer = this.startTimer.bind(this);

    this.updateQuestion = this.updateQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.updateExamTimer = this.updateExamTimer.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  startTimer = () => {
    let timer = this.props.examData.totalTime;

    timer = timer - 1;

    const interval =
      timer >= 0 && setInterval(() => this.startTimer(), 1000);

    if (timer >= 0) {
      const examData = { ...this.props.examData };
      examData.totalTime = timer;
      this.setState({
        ...this.state,
        timer: timer
      });
      this.props.setExamData(examData);
    }

    return () => clearInterval(interval);
  }

  handleSubmit = () => {
    console.log(this.props.examData);
  }

  updateQuestion(question, index) {
    const { examData } = this.props;
    examData.questions[index] = question;

    this.props.setExamData({ ...examData });
  }

  nextQuestion(nextIndex) {
    const { examData } = this.props;
    
    if (nextIndex <= (examData.totalQuestions - 1)) {
      this.props.setCurrentQuestion(nextIndex);
    }
  }

  updateExamTimer(timeLeft) {
    if(timeLeft >= 0) {
      const { examData } = this.props;
      examData.totalTime = timeLeft;

      this.props.setExamData({ ...examData });
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { user, examData, currentQuestion } = this.props;
    const { questions } = examData;
    const question = questions[currentQuestion];

    return isLoaded ? (
      <Aux>
        <Card border="light">
          <Card.Body>
          <Card.Header>
            <ExamHeader
              user={user}
              examData={examData}
              updateExamTimer={(val) => this.updateExamTimer(val)}
            />
          </Card.Header>
            <Row noGutters={true}>
              <Col>
                <div className="exam__wrapper">
                  <div className="position-relative fs-14 mb-4 mb-md-0 pr-0 pr-md-4 question">
                    <ExamQuestion 
                      question={question} 
                      currentQuestion={currentQuestion}
                      updateQuestion={(q, i) => this.updateQuestion(q, i)}
                      nextQuestion={(i) => this.nextQuestion(i)}
                    />
                  </div>
                  <div className="shadow-sm exam--summary">
                    <div>
                      <ExamSummary
                        questions={examData.questions}
                        currentQuestion={currentQuestion}
                      />
                    </div>
                    <div className="mt-3">
                      <ExamQuestionIndexes
                        questions={examData.questions}
                        currentQuestion={currentQuestion}
                        updateQuestion={(q, i) => this.updateQuestion(q, i)}
                        setCurrentQuestion={(i) => this.nextQuestion(i)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Aux>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    user: state.questionReducer.user,
    examData: state.questionReducer.examData,
    examState: state.questionReducer.examState,
    currentQuestion: state.questionReducer.currentQuestion
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setExamData: (payload) => dispatch({ type: actionTypes.SET_EXAM_DATA, payload: payload }),
    setExamState: (payload) => dispatch({ type: actionTypes.SET_EXAM_STATE, payload: payload }),
    setCurrentQuestion: (payload) => dispatch({ type: actionTypes.SET_QUESTION, payload: payload })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
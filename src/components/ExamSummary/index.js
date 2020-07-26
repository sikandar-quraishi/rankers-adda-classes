import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import constants from '../../utils/constants';

import './index.scss';

const { QUESTION_STATES } = constants;
const initialStates = Object.freeze({
  notVisited: 0,
  visited: 0,
  notAnswered: 0,
  answered: 0,
  markedForReview: 0
});

class ExamSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      currentQuestion: 0,
      questions: [],
      summary: {...initialStates}
    };

    this.updateSummary = this.updateSummary.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentQuestion !== state.currentQuestion) {
      return {
        currentQuestion: props.currentQuestion,
        questions: props.questions
      };
    }

    return null;
  }

  componentDidMount() {
    this.setState((state, props) => ({
      isLoaded: true,
      questions: props.questions,
      currentQuestion: props.currentQuestion
    }));

    this.updateSummary();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      this.updateSummary();
      
      this.setState((state, props) => ({
        questions: props.questions,
        currentQuestion: props.currentQuestion
      }));
    }
  }

  updateSummary() {
    const { questions } = this.props;
    const summary = {...initialStates};

    questions.forEach((q) => {
      switch (q.state) {
        case QUESTION_STATES.visited:
          summary.visited = summary.visited + 1;
          break;
        case QUESTION_STATES.answered:
          summary.answered = summary.answered + 1;
          break;
        case QUESTION_STATES.notAnswered:
          summary.notAnswered = summary.notAnswered + 1;
          break;
        case QUESTION_STATES.markedForReview:
          summary.markedForReview = summary.markedForReview + 1;
          break;
        default:
          summary.notVisited = summary.notVisited + 1;
          break;
      }
    });

    this.setState({
      summary: summary
    });
  }

  render() {
    const { isLoaded, summary } = this.state;

    return isLoaded ? (
      <div className="position-relative fs-14 bg-light p-3 questions__summary">
        <Row noGutters={false}>
          <Col span={6}>
            <Badge variant="secondary" className="fs-14 fw-600 mr-2 counts">{summary.notVisited}</Badge> Not Visited
          </Col>
          <Col span={6}>
            <Badge variant="danger" className="fs-14 fw-600 mr-2 counts">{summary.notAnswered}</Badge> Not Answered
          </Col>
        </Row>
        <Row noGutters={false} className="mt-2">
          <Col span={6}>
            <Badge variant="success" className="fs-14 fw-600 mr-2 counts">{summary.answered}</Badge> Answered
          </Col>
          <Col span={6}>
            <Badge variant="info" className="fs-14 fw-600 mr-2 counts">{summary.markedForReview}</Badge> Mark for Review
          </Col>
        </Row>
      </div>
    ) : null;
  }
}

export default ExamSummary;
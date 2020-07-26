import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import constants from '../../utils/constants';

import './index.scss';

const { QUESTION_STATES } = constants;

class ExamQuestionIndexes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      questions: [],
      currentQuestion: 0
    };

    this.getVariant = this.getVariant.bind(this);

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
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      this.setState((state, props) => ({
        questions: props.questions,
        currentQuestion: props.currentQuestion
      }));
    }
  }

  getVariant(s) {
    switch (s) {
      case QUESTION_STATES.visited:
        return 'light';
      case QUESTION_STATES.answered:
        return 'success';
      case QUESTION_STATES.notAnswered:
        return 'danger';
      case QUESTION_STATES.markedForReview:
        return 'info';
      default:
        return 'secondary';
    }
  }
  
  setCurrentQuestion(i) {
    const { questions, currentQuestion } = this.state;
    const question = questions[currentQuestion];

    if(question.state === 1 && question.userInput === null) {
      question.state = QUESTION_STATES.notAnswered;
      this.props.updateQuestion({...question}, currentQuestion);
    }

    this.props.setCurrentQuestion(i);
  }

  render() {
    const { isLoaded, questions } = this.state;

    return isLoaded ? (
      <div className="position-relative fs-14 bg-light question__indexes">
        <Card style={{ border: 0 }}>
          <Card.Header>
            <span className="fs-16">Question Index</span>
          </Card.Header>
          <Card.Body className="p-3">
            <Row noGutters={false}>
              <Col>
                <ul className="d-flex flex-wrap justify-content-between">
                  {
                    questions.map((q, i) => {
                      const variant = this.getVariant(q.state);
                      return (
                        <li className="mb-3" key={`question-index-${i}`}>
                          <Button className="py-1" variant={variant} onClick={() => this.setCurrentQuestion(i)}>
                            <span className="fs-16">{i + 1}</span>
                          </Button>
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    ) : null;
  }
};

export default ExamQuestionIndexes;
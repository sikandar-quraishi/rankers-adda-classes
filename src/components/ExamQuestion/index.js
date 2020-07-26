import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import CheckIcon from 'mdi-react/CheckIcon';
import constants from '../../utils/constants';

const { QUESTION_STATES } = constants;

class ExamQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      question: {},
      currentQuestion: 0,
      staticId: Math.floor(Math.random() * 100000)
    };

    this.getOptions = this.getOptions.bind(this);
    this.getTextArea = this.getTextArea.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
    this.markForReview = this.markForReview.bind(this);
    this.markAndNext = this.markAndNext.bind(this);
    this.saveAndNext = this.saveAndNext.bind(this);
    this.markQuestionVisited = this.markQuestionVisited.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentQuestion !== state.currentQuestion) {
      return {
        currentQuestion: props.currentQuestion,
        question: props.question,
        staticId: Math.floor(Math.random() * 100000)
      };
    }

    return null;
  }

  componentDidMount() {
    this.setState((state, props) => ({
      isLoaded: true,
      question: props.question,
      currentQuestion: props.currentQuestion,
      staticId: Math.floor(Math.random() * 100000)
    }));

    this.markQuestionVisited();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      this.setState((state, props) => ({
        question: props.question,
        currentQuestion: props.currentQuestion,
        staticId: props.staticId
      }));

      this.markQuestionVisited();
    }
  }

  getOptions() {
    const { question } = this.props;

    return question.options.map((o, i) => {
      return (
        <li className="w-100" key={`options_${this.state.staticId}-${i}`}>
          <div className="pretty p-round p-fill p-svg w-100 py-2 px-2 m-0">
            <input id={`option-${this.state.staticId}-${i}`}
              type="radio"
              name={`option_${this.state.staticId}`}
              value={o}
              onChange={this.handleChange}
              defaultChecked={question.userInput == o}
            />
            <div className="state p-info">
              <CheckIcon className="svg svg-icon" />
              <label>{o}</label>
            </div>
          </div>
        </li>
      )
    })
  }

  getTextArea() {
    const { question } = this.state;
    return <Form.Control as="textarea" rows="3" onChange={this.handleChange} value={question.userInput !== null ? question.userInput : ""} />
  }

  handleChange(e) {
    const { question } = this.state;
    question.userInput = e.target.value;

    this.setState({
      question
    });
  }

  clearResponse() {
    const { question, currentQuestion } = this.state;
    question.userInput = null;
    question.state = QUESTION_STATES.notAnswered;

    this.setState({
      question,
      staticId: Math.floor(Math.random() * 100000)
    });

    this.props.updateQuestion({...question}, currentQuestion);
  }

  markForReview() {
    const { question, currentQuestion } = this.state;
    question.userInput = null;
    question.state = QUESTION_STATES.markedForReview;

    this.setState({
      question
    });

    this.props.updateQuestion({...question}, currentQuestion);
  }

  markAndNext() {
    const { question, currentQuestion } = this.state;
    question.state = QUESTION_STATES.markedForReview;

    this.setState({
      question
    });

    this.props.updateQuestion({...question}, currentQuestion);
    this.props.nextQuestion((currentQuestion + 1));
  }

  saveAndNext() {
    const { question, currentQuestion } = this.state;
    question.state = question.userInput ? QUESTION_STATES.answered : QUESTION_STATES.notAnswered;

    this.setState({
      question
    });

    this.props.updateQuestion({...question}, currentQuestion);
    this.props.nextQuestion((currentQuestion + 1));
  }

  markQuestionVisited() {
    const { question, currentQuestion } = this.state;

    if(question.state === 0) {
      question.state = QUESTION_STATES.visited;

      this.setState({
        question
      });

      this.props.updateQuestion({...question}, currentQuestion);
    }
  }

  render() {
    const { isLoaded, question, currentQuestion } = this.state;

    return isLoaded ? (
      <span>
        <div className="fs-20 fw-600">
          <span>Q{currentQuestion + 1}. Study the following information carefully and answer the questions given below:</span>
        </div>
        <div className="fs-16 fw-400">
          {question.question}
        </div>
        <div className="fs-16 fw-400 mt-5 w-100">
          <ul className="d-flex flex-column align-items-start justify-content-start m-0 p-0">
            {question.type === 'MCQ' ? this.getOptions() : this.getTextArea()}
          </ul>
        </div>
        <div className="mt-3 w-100">
          <span>
            <Button
              variant="secondary"
              onClick={this.clearResponse}
              className="mr-3"
            >
              Clear
            </Button>
            <Button
              variant="info"
              onClick={this.markForReview}
              className="mr-3"
            >
              Mark for Review & Next
            </Button>
            <Button
              variant="warning"
              onClick={this.markAndNext}
              className="mr-3"
            >
              Save & Mark for Review
            </Button>
            <Button
              variant="primary"
              onClick={this.saveAndNext}
            >
              Save & Next
            </Button>
          </span>
        </div>
      </span>
    ) : null;
  }
};

export default ExamQuestion;
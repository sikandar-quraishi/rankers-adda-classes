import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import ExcelToJson from '../../utils/excelToJson';
import * as actionTypes from '../../store/actions/actionTypes';

import Aux from '../../hoc/_Aux';
import Loader from '../../components/Loader';
import './index.scss';

function Home(props) {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    debugger;
    console.log("e:",e);
    // const file = e.target.files[0];
    try {
      setLoading(true);
      const { details, questions } = await ExcelToJson(e);

      if (details && questions && questions.length > 1) {
        const data = {
          examName: details[0][1] !== undefined ? details[0][1] : null,
          examType: details[1][1] !== undefined ? details[1][1] : null,
          totalTime: details[2][1] !== undefined ? (Math.floor(details[2][1] * 60 * 60)) : null,
          totalMarks: details[3][1] !== undefined ? details[3][1] : null,
          negativeMark: details[4][1] !== undefined ? details[4][1] : null,
          sections: {
            'A': {
              totalTime: details[5][1] !== undefined ? details[5][1] : 0
            },
            'B': {
              totalTime: details[6][1] !== undefined ? details[6][1] : 0
            },
            'C': {
              totalTime: details[7][1] !== undefined ? details[7][1] : 0
            },
            'D': {
              totalTime: details[8][1] !== undefined ? details[8][1] : 0
            }
          },
          totalQuestions: (questions.length - 1),
          questions: []
        };

        for (let i = 1; i <= (questions.length - 1); i++) {
          let _r = questions[i];
          let options = [];
          let type = _r[0] !== undefined ? _r[0] : null;

          if (type === 'MCQ') {
            for (let j = 4; j <= 7; j++) {
              options.push(_r[j])
            }
          }

          data.questions.push({
            type: type,
            section: _r[1] !== undefined ? _r[1] : null,
            question: _r[2] !== undefined ? _r[2] : null,
            options: options,
            answer: _r[8],
            timeAlloted: (_r[9] !== undefined && _r[9]) ? (_r[9] * 60) : null,
            userInput: null,
            state: i === 1 ? 1 : 0
          });
        }

        props.setExamData(data);
        props.setExamState(0);
        props.setCurrentQuestion(0);

        setTimeout(() => {
          props.history.push('/exam');
        }, 10);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Aux>
      <Container>
        <Row>
          <Col>
            <Card border="light">
              <Card.Header>
                <span className="fs-24">Upload Question Paper</span>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center py-4 position-relative">
                  <div>
                    {
                      loading
                        ?
                        <Loader label={false} />
                        :
                        <InputGroup>
                          <input
                            type="file"
                            accept=".xls,.xlsx"
                            onChange={(e) => handleChange(e)}
                          />
                          <FormControl
                            placeholder="Browse..."
                            aria-label="Browse Excel File"
                            aria-describedby="file-input"
                          />
                          <InputGroup.Append>
                            <Button>Browse...</Button>
                          </InputGroup.Append>
                        </InputGroup>
                    }
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.questionReducer.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setExamData: (payload) => dispatch({ type: actionTypes.SET_EXAM_DATA, payload: payload }),
    setExamState: (payload) => dispatch({ type: actionTypes.SET_EXAM_STATE, payload: payload }),
    setCurrentQuestion: (payload) => dispatch({ type: actionTypes.SET_QUESTION, payload: payload })
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
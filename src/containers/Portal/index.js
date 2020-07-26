import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { Container, Row, Col } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import Instructions from '../../components/Instructions';
import Exam from '../../components/Exam';

import './index.scss';

function Portal(props) {
  return (
    <Aux>
      {
        props.examState !== 1
          ?
          <Container>
            <Row>
              <Col>
                <Instructions />
              </Col>
            </Row>
          </Container>
          : <Exam />
      }
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    examData: state.questionReducer.examData,
    examState: state.questionReducer.examState
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setExamData: (payload) => dispatch({ type: actionTypes.SET_EXAM_DATA, payload: payload })
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portal));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class LevelFocus extends Component {
    render() {
        return (
            <div>
                Selected Level : <input placeholder={this.props.currentValue}/>
                Level Description : <input />
                Video Link Update : <input type="form" />
                Images upload : <input type="form" />
                <button onClick={this.submit}> save </button>
                <button onClick={this.reset}> cancel </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      currentQuestion: state.questionReducer.currentQuestion
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    //   setCurrentLevel: (payload) => dispatch({ type: actionTypes.SET_CURRENT_LEVEL, payload: payload }),
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(LevelFocus);
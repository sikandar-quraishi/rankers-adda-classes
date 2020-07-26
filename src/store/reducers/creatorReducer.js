import * as actionTypes from '../actions/actionTypes';
import update from 'react-addons-update';


const initialState = {
    isAuthenticated: false,
    course: [],
}

const creatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATOR:
            return update(state, {course : {$set: action.data.rows}});
        default:
            return state;
    }
};

export default creatorReducer;
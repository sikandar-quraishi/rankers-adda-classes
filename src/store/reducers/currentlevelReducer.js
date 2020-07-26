import * as actionTypes from '../actions/actionTypes';
import update from 'react-addons-update';


const initialState = {
    isAuthenticated: false,
    currentLevel: [],
    cureentLevelChild: []
}

const creatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_LEVEL:
            return update(state, { currentLevel: { $set: action.payload } });
        case actionTypes.SET_CURRENT_LEVEL_CHILD:
            return update(state, { currentLevelChild: { $set: action.payload } });
        default:
            return state;
    }
};

export default creatorReducer;
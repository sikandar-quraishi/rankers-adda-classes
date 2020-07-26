import * as actionTypes from '../actions/actionTypes';
import update from 'react-addons-update';


const initialState = {
    isAuthenticated: false,
    courses: [],
    subjects: [],
    topics: [],
    chapters: []
}

const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPLOADER_GET_COURSES:
            return update(state, { courses: { $set: action.data.rows } });
        case actionTypes.UPLOADER_GET_COURSE_SUBJECTS:
            return update(state, { subjects: { $set: action.data } });
        case actionTypes.UPLOADER_GET_SUBJECT_TOPICS:
            return update(state, { topics: { $set: action.data } });
        case actionTypes.UPLOADER_GET_TOPIC_CHAPTERS:
            return update(state, { chapters: { $set: action.data } });
        default:
            return state;
    }
};

export default uploadReducer;
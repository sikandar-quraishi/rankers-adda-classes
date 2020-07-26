import * as ActionTypes from './actionTypes';
import * as api from '../../api/uploaderApi';

export function loadReducer(type, data) {
    return {
        type,
        data
    }
}

// export function getCards() {
//     return function (dispatch) {
//         return api.getCourse().then((resp) => {
//             resp = resp || {};
//             dispatch(loadReducer(ActionTypes.UPLOADERCARDS, resp));
//             return resp;
//         })
//     };
// }

export function getCourses() {
    return function (dispatch) {
        return api.getCourse().then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.UPLOADER_GET_COURSES, resp));
            return resp;
        })
    };
}

export function getCourseSubjects(courseId) { 
    return function (dispatch) {
        return api.getSubject(courseId).then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.UPLOADER_GET_COURSE_SUBJECTS, resp));
            return resp;
        })
    };
}

export function getSubjectTopics(subjectId) {
    return function (dispatch) {
        return api.getTopic(subjectId).then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.UPLOADER_GET_SUBJECT_TOPICS, resp));
            return resp;
        })
    };
}

export function getTopicChapters(chapterId) {
    return function (dispatch) {
        return api.getChapter(chapterId).then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.UPLOADER_GET_TOPIC_CHAPTERS, resp));
            return resp;
        })
    };
}
import * as ActionTypes from './actionTypes';
import * as api from '../../api/uploaderApi';

export function loadReducer(type, data) {
    return {
        type: type,
        data: data
    }
}

export function getData() {
    return function (dispatch) {
        return api.getCourse().then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.CREATOR, resp));
            return resp;
        })
    };
}

export function CourseTestUpload(data) {
    return function (dispatch) {
        return api.courseTestUpload(data).then((resp) => {
            resp = resp || {};
            // dispatch(loadReducer(ActionTypes.CREATOR, resp));
            return resp;
        })
    };
}

export function SubjectTestUpload(data) {
    return function (dispatch) {
        return api.subjectTestUpload(data).then((resp) => {
            resp = resp || {};
            // dispatch(loadReducer(ActionTypes.CREATOR, resp));
            return resp;
        })
    };
}


export function TopicTestUpload(data) {
    return function (dispatch) {
        return api.topicTestUpload(data).then((resp) => {
            resp = resp || {};
            // dispatch(loadReducer(ActionTypes.CREATOR, resp));
            return resp;
        })
    };
}


export function ChapterTestUpload(data) {
    return function (dispatch) {
        return api.chapterTestUpload(data).then((resp) => {
            resp = resp || {};
            // dispatch(loadReducer(ActionTypes.CREATOR, resp));
            return resp;
        })
    };
}
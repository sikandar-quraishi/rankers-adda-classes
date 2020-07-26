import * as ActionTypes from './actionTypes';
import * as api from '../../api/MediaAPIs';

export function loadReducer(type, data) {
    return {
        type,
        data
    }
}

export function postMedia(data) {
    return function (dispatch) {
        return api.postLevelMedia(data).then((resp) => {
            resp = resp || {};
            // dispatch(loadReducer(ActionTypes.UPLOADERCARDS, resp));
            return resp;
        })
    };
}

export function getMedia(Id) {
    return function (dispatch) {
        return api.getAllMedia(Id).then((resp) => {
            resp = resp || {};
            dispatch(loadReducer(ActionTypes.GET_LEVEL_MEDIA, resp));
            return resp;
        })
    };
}

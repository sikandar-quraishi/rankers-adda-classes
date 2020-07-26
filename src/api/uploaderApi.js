import Api from "./Api";

export function getQuestions(data) {
    let url = `/api/questionupload`;
    return PutRequest(url, data);
}

export function getdata() {
    let url = `/api/hello`;
    return GetRequest(url);
}
export function getCourse() {
    let url = `/api/course`;
    return GetRequest(url);
}

export function getSubject(courseId) {
    let url = `/api/subject/${courseId}`;
    return GetRequest(url);
}

export function getTopic(subjectId) {
    let url = `/api/topic/${subjectId}`;
    return GetRequest(url);
}

export function getChapter(topicId) {
    let url = `/api/chapter/${topicId}`;
    return GetRequest(url);
}

export function getCompleteCouseList() {
    let url = `/api/courselist`;
    return GetRequest(url);
}

export function courseVideoUpload(data) {
    let url = "/api/coursevideoupload";
    return PostRequest(url, data);
}
export function courseSubjectUpload(data) {
    let url = "/api/subjectvideoupload";
    return PostRequest(url, data);
}

export function courseTopicUpload(data) {
    let url = "/api/topicvideoupload";
    return PostRequest(url, data);
}

export function courseChapterUpload(data) {
    let url = "/api/chaptervideoupload";
    return PostRequest(url, data);
}

export function courseQuestionUpload(data) {
    let url = "/api/questionupload";
    return PostRequest(url, data);
}

export function courseupload(data) {
    let url = "/api/courseupload";
    return PostRequest(url, data);
}

export function subjectUpload(data) {
    let url = "/api/subjectupload";
    return PostRequest(url, data);
}

export function topicUpload(data) {
    let url = "/api/topicupload";
    return PostRequest(url, data);
}

export function chapterUpload(data) {
    let url = "/api/chapterupload";
    return PostRequest(url, data);
}

export function getCourseVideoList(Id){
    let url = `/api/coursevideolist/${Id}`;
    return GetRequest(url);
}

export function getSubjectVideoList(Id){
    let url = `/api/subjectvideolist/${Id}`;
    return GetRequest(url);
}

export function getTopicVideoList(Id){
    let url = `/api/topicvideolist/${Id}`;
    return GetRequest(url);
}

export function getChapterVideoList(Id){
    let url = `/api/chaptervideolist/${Id}`;
    return GetRequest(url);
}


function GetRequest(url) {
    return new Promise(function (resolve, reject) {

        let obj = {
            url: url,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }

        Api.get(obj.url, obj.onSuccess, obj.onError);

    });
}

function PutRequest(url, data) {
    return new Promise(function (resolve, reject) {

        let obj = {
            url: url,
            data: data,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }

        Api.put(obj.url, obj.data, obj.onSuccess, obj.onError);

    });
}

function PostRequest(url, data) {
    return new Promise(function (resolve, reject) {
        let obj = {
            url: url,
            data: data,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }
        Api.post(obj.url, obj.data, obj.onSuccess, obj.onError);

    });
}
import Api from "./Api";

export function courseTestUpload(data){
    let url = "/api/coursetestupload";
    return PostRequest(url, data);
}

export function subjectTestUpload(data){
    let url = "/api/subjecttestupload";
    return PostRequest(url, data);
}

export function topicTestUpload(data){
    let url = "/api/topictestupload";
    return PostRequest(url, data);
}


export function chapterTestUpload(data){
    let url = "/api/chaptertestupload";
    return PostRequest(url, data);
}

export function courseTestList(Id){
    let url = `/api/coursetestlist/${Id}`;
    return GetRequest(url);
} 

export function subjectTestList(Id){
    let url = `/api/subjecttestlist/${Id}`;
    return GetRequest(url);
}

export function topicTestList(Id){
    let url = `/api/topictestlist/${Id}`;
    return GetRequest(url);
}

export function chapterTestList(Id){
    let url = `/api/chaptertestlist/${Id}`;
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
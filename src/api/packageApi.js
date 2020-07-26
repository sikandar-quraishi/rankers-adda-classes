import Api from "./Api";

export function coursePackageUpload(data) {
    let url = "/api/createpackage";
    return PostRequest(url, data);
}

export function allPackage() {
    let url = "/api/getallpackages";
    return GetRequest(url);
}

export function packageDetail(Id) {
    let url = `/api/package/${Id}`;
    return GetRequest(url);
}

export function coursepackageOrder(Id) {
    let url = `/api/coursepackageorder/${Id}`;
    return GetRequest(url);
}
// export function chapterTestList(Id){
//     let url = `/api/chaptertestlist/${Id}`;
//     return GetRequest(url);
// }


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
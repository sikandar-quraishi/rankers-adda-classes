import Api from "./Api";


export function postLevelMedia(data){
    let url = "/packageorder";
    return PostRequest(url, data);
}

export function getAllMedia(Id){
    let url = `/api/packageorder/${Id}`;
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

// function PutRequest(url, data) {
//     return new Promise(function (resolve, reject) {

//         let obj = {
//             url: url,
//             data: data,
//             onSuccess: (resp) => {
//                 resolve(resp);
//             },
//             onError: (err) => {
//                 reject();
//                 console.log('api error', err);
//             }
//         }

//         Api.put(obj.url, obj.data, obj.onSuccess, obj.onError);

//     });
// }

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
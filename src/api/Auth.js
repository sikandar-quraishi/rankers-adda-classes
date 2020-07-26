import Api from "./Api";

export function login(data) {
    let url = "/api/signin";
    return PostRequest(url, data);
}

export function signup(data) {
    let url = "/api/signup";
    return PostRequest(url, data);
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
/**
 * Author: Cleumir Souza
 * Description: File contains generic http request.
 * Date: 28/12/2018
 *
 * @description: Generic http request
 * @param url - Api endpoint.
 * @param typeRequest - Type of verb like (Get, Post and others).
 */
request = (url, typeRequest, param)=> {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.status);
                }
            }
        }
        xhr.ontimeout = function () {
            reject('timeout');
        }
        xhr.open(typeRequest, url, true);
        if (param) {
            //Send the proper header information along with the request
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(param);
        } else {
            xhr.send();
        }
    });
}

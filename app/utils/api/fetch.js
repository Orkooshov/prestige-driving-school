export function sendRequest(url, method, headers, body = null){
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
        timeout: 1000
    })
}
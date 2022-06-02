import { getItem } from "../storage"
import { AuthError } from "../errors"

export function sendRequest(url, method, headers, body = null) {
  return fetch(url, {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
    timeout: 1000
  })
}

export async function sendRequestAuthorized(url, method, headers, body = null) {
  const token = await getItem('apiKey')
  headers = {
    "Authorization": `token ${token}`,
    ...headers
  }
  return await sendRequest(url, method, headers, body)
}


export async function getDataAuthorized(url, onSuccess, onNetworkError,
  onAuthError, onLoaded) {
  await sendRequestAuthorized(
    url,
    "GET",
    { "Content-Type": "Application/json" }
  )
    .then(responce => {
      if (responce.ok) return responce
      throw new AuthError('')
    })
    .then(responce => responce.json())
    .then(data => onSuccess(data))
    .catch(error => {
      if (error instanceof AuthError) {
        onAuthError(error)
        return
      }
      onNetworkError(error)
    })
    .finally(onLoaded)
}
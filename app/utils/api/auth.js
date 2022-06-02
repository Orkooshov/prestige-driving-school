import URLs from "../../config/server";
import { sendRequest } from "./fetch.js";
import { AuthError } from "../errors";


const url = URLs.getToken

export async function getToken(username, password, onSuccess, 
    onNetworkError, onCredentialsIncorrect) {
    await sendRequest(
        url,
        "POST",
        {"Content-Type": "Application/json"},
        { "username": username, "password": password}
    )
    .then(responce => {
        if (responce.ok) return responce.json()
        throw new AuthError("Incorrect login or password")
    })
    .then(json => json.token)
    .then(data => onSuccess(data))
    .catch(error => {
        if (error instanceof AuthError) {
            onCredentialsIncorrect(error)
            return
        }
        onNetworkError(error)
    });
}
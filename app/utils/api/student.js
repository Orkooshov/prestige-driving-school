import URLs from "../../config/server";
import { getItem } from "../storage";
import { getDataAuthorized } from "./fetch.js";


async function getStudentURL(username=null) {
  return `${URLs.student}${username == null ? await getItem('username') : username}/`
}

export async function getStudent(onSuccess, onNetworkError,
  onAuthError, onLoaded) {
  const url = await getStudentURL()
  await getDataAuthorized(url, onSuccess, onNetworkError, 
    onAuthError, onLoaded)
}

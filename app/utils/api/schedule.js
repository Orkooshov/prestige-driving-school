import URLs from "../../config/server";
import { getItem } from "../storage";
import { getDataAuthorized } from "./fetch.js";


export async function getScheduleTheory(onSuccess, onNetworkError,
  onAuthError, onLoaded) {
  await getDataAuthorized(URLs.scheduleTheory, onSuccess, onNetworkError, 
    onAuthError, onLoaded)
}

async function getSchedulePracticeURL() {
  return `${URLs.schedulePractice}${await getItem('username')}/`
}

export async function getSchedulePractice(onSuccess, onNetworkError,
  onAuthError, onLoaded) {
  const url = await getSchedulePracticeURL()
  await getDataAuthorized(url, onSuccess, onNetworkError, 
    onAuthError, onLoaded)
}

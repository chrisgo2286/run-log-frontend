import axios from 'axios';
import { getMonthNameFromNum } from './miscFunctions';

const url = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('token')
const headers = {
    headers: {
        Authorization: 'Token ' + token
    }
}

export async function getCalendar (month, year) {
    const newUrl = url + 'calendar/?month=' + month + '&year=' + year
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlyStats (month, year) {
    const newUrl = `${url}monthly_stats/?month=${month}&year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getYearlyStats (year) {
    const newUrl = `${url}yearly_stats/?year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function postRun (fields) {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.post(url + 'runs/', newFields, headers)
    return result.data;
}

export async function patchRun (fields) {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.patch(url + 'runs/' + fields.id + '/', fields, headers)
    return result.data;
}

export async function deleteRun (id) {
    const result = await axios.delete(url + 'runs/' + id + '/', headers)
    return result;
}

export async function registerNewUser (fields) {
    const result = await axios.post(url + 'registration/', fields)
    return result;
}

export async function loginUser (credentials) {
    try {
        const result = await axios.post(url + 'login/', credentials)
        return result
    } catch {
        return 'Invalid Credentials';
    }
}

export async function logoutUser () {
    const result = await axios.post(url + 'logout/', headers)
    return result
}
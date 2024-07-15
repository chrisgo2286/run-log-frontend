import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/'

export async function getCalendar (month, year) {
    const newUrl = url + 'calendar/?month=' + month + '&year=' + year
    const result = await axios.get(newUrl)
    return result.data;
}

export async function postRun (fields) {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.post(url + 'runs/', newFields)
    return result.data;
}

export async function patchRun (fields) {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.patch(url + 'runs/' + fields.id + '/', fields)
    return result.data;
}
import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/'

export async function getCalendar (month, year) {
    const newUrl = url + 'calendar/?month=' + month + '&year=' + year
    const result = await axios.get(newUrl)
    return result.data;
}
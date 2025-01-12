import axios from 'axios';
import { RegistrationProps } from '../components/registration/registrationTypes';
import { DataTypes, RunDataTypes } from '../components/calendar/calendarTypes';
import { FieldsType } from '../components/login/loginTypes';
import { MonthlyStatsTypes } from '../components/profile/monthlyStats/monthlyStats';
import { ResponseType, StatusType } from './miscTypes';
import { DataItem } from '../components/profile/monthlyChart/monthlyChart';
import { TrainingBlockDataTypes, TrainingBlockTypes } from './hooks/trainingBlockHooks';

const url = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('token')
const headers = {
    headers: {
        Authorization: 'Token ' + token
    }
}

function createHeaders () {
    const token = localStorage.getItem('token')
    return {
        headers: {
            Authorization: 'Token ' + token
        }
    }
}

export async function getCalendar (month: number, year: number): Promise<DataTypes> {
    const newUrl = url + 'calendar/?month=' + month + '&year=' + year
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlyStats (
    month: number, 
    year: number
): Promise<MonthlyStatsTypes> {
    const newUrl = `${url}monthly_stats/?month=${month}&year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getYearlyStats (year: number) {
    const newUrl = `${url}yearly_stats/?year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getMonthlyChartData (
    month: number, year: number): Promise<DataItem[]> {
    const newUrl = `${url}monthly_chart/?month=${month}&year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getWeeklyChartData (startDate: string) {
    const newUrl = `${url}weekly_chart/?startDate=${startDate}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getRunTypeChartData (month: number, year: number) {
    const newUrl = `${url}run_type_chart/?month=${month}&year=${year}`
    const result = await axios.get(newUrl, headers)
    return result.data
}

export async function getTrainingBlocks (): Promise<TrainingBlockTypes[]> {
    const result = await axios.get(`${url}trainingBlocks/`, createHeaders())
    return result.data
}

export async function postTrainingBlock (fields: TrainingBlockTypes): Promise<StatusType> {
    const newFields = { ...fields, "owner": 1 }
    const result = await axios.post(url + "trainingBlocks/", newFields, createHeaders())
    return { status: result.status }
}

export async function patchTrainingBlock (fields: TrainingBlockTypes, id: string): Promise<StatusType> {
    const newFields = { ...fields, "owner": 1 }
    const newUrl = `${url}trainingBlocks/${id}/`
    const result = await axios.patch(newUrl, newFields, createHeaders())
    return { status: result.status }
}

export async function getTrainingBlockData (id: number): Promise<TrainingBlockDataTypes> {
    const result = await axios.get(`${url}training_block_data/?id=${id}`, createHeaders())
    return result.data
}

export async function deleteTrainingBlock (id: number): Promise<StatusType> {
    const newUrl = `${url}trainingBlocks/${id}/`
    const result = await axios.delete(newUrl, createHeaders())
    return { status: result.status }
}

export async function postRun (fields: RunDataTypes): Promise<StatusType> {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.post(url + 'runs/', newFields, createHeaders())
    return { status: result.status };
}

export async function patchRun (fields: RunDataTypes): Promise<StatusType> {
    let newFields = { ...fields, 'owner': 1 }
    const result = await axios.patch(url + 'runs/' + newFields.id + '/', newFields, createHeaders())
    return { status: result.status };
}

export async function deleteRun (id: string): Promise<StatusType> {
    const result = await axios.delete(url + 'runs/' + id + '/', headers)
    return { "status": result.status };
}

export async function registerNewUser (fields: RegistrationProps) {
    const result = await axios.post(url + 'registration/', fields)
    return result;
}

export async function loginUser (credentials: FieldsType): Promise< ResponseType | string> {
    try {
        const result = await axios.post(url + 'login/', credentials)
        return { "status": result.status, "token": result.data.key } 
    } catch {
        return 'Invalid Credentials';
    }
}

export async function logoutUser () {
    const result = await axios.post(url + 'logout/', headers)
    return result
}
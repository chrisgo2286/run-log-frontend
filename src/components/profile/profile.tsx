import { useState, useEffect } from 'react';
import CurrentMonthStats from "./currentMonthStats"
import CurrentYearStats from "./currentYearStats"
import MonthlyChart from "./monthlyChart"
import WeeklyChart from "./weeklyChart"
import RunTypes from "./runTypes"
import PaceChart from "./paceChart"
import { getProfile } from '../../misc/apiCalls';
import { ProfileDataTypes } from './profileTypes';

export default function Profile () {
    const [ data, setData ] = useState<ProfileDataTypes>()
    
    useEffect(() => {
        getProfile().then((data) => setData(data))
    },[])

    return (
        <main className="flex flex-row flex-wrap justify-center py-10 gap-10 w-11/12 border border-gray-200 mx-auto">
            <CurrentMonthStats data={ data?.monthly_stats }/>
            <CurrentYearStats data={ data?.yearly_stats }/>
            <MonthlyChart />
            <WeeklyChart />
            <PaceChart />     
            <RunTypes />
        </main>
    )
}
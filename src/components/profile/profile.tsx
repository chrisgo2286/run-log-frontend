import { useState, useEffect } from 'react';
import MonthlyStats from "./monthlyStats/monthlyStats"
import YearlyStats from "./yearlyStats/yearlyStats"
import MonthlyChart from "./monthlyChart"
import WeeklyChart from "./weeklyChart"
import RunTypes from "./runTypes"
import PaceChart from "./paceChart"

export default function Profile () {
    
    return (
        <main className="flex flex-row flex-wrap justify-center py-10 gap-10 w-11/12 border border-gray-200 mx-auto">
            <MonthlyStats />
            <YearlyStats />
            <MonthlyChart />
            <WeeklyChart />
            <PaceChart />     
            <RunTypes />
        </main>
    )
}
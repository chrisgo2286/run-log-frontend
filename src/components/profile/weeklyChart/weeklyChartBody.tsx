import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { WeeklyChartBodyProp } from './weeklyChartTypes';

export default function WeeklyChartBody ({ 
    data 
    }: WeeklyChartBodyProp): JSX.Element {
    
    return (
        <ResponsiveContainer width="90%" height="70%">
            <BarChart data={ data }>
                <Bar dataKey="distance" fill="#8884d8" />
                <XAxis dataKey="label" interval={0} tickMargin={14} />
                <YAxis interval={0} />
            </BarChart>
        </ResponsiveContainer>
    )
}
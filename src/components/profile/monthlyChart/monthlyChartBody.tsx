import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { MonthlyChartBodyProp } from "./monthlyChartTypes";

export default function MonthlyChartBody ({ 
    data 
    }: MonthlyChartBodyProp): JSX.Element {
    
    return (
        <ResponsiveContainer width="90%" height="60%">
            <BarChart data={data}>
                <Bar dataKey="distance" fill="#8884d8" />
                <XAxis dataKey="label" angle={-70} interval={0} tickMargin={14}/>
                <YAxis interval={0}/>
            </BarChart>
        </ResponsiveContainer>
    )
}
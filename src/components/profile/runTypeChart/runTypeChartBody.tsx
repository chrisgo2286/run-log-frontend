import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { RunTypeChartBodyProp } from './runTypeChartTypes';

export default function RunTypeChartBody ({ 
    data 
}: RunTypeChartBodyProp): JSX.Element {
    
    return (
        <ResponsiveContainer width="90%" height="70%">
            <PieChart>
                <Pie data={ data } dataKey="distance" fill="#8884d8">
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
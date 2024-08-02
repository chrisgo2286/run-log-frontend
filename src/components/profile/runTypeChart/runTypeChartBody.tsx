import { PieChart, Pie, ResponsiveContainer } from 'recharts';

export default function RunTypeChartBody ({ data }) {
    return (
        <ResponsiveContainer width="90%" height="70%">
            <PieChart>
                <Pie data={ data } dataKey="distance" fill="#8884d8">
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
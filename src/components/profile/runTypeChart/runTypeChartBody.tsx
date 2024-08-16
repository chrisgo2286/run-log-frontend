import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { DataItem, RunTypeChartBodyProp } from './runTypeChartTypes';
import { formatDistance } from '../../../misc/miscFunctions';

export default function RunTypeChartBody ({ 
    data 
}: RunTypeChartBodyProp): JSX.Element {
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    
    function renderLabel ({name, distance}: DataItem) {
        return (distance) ? name : null;
    }

    return (
        <ResponsiveContainer width="90%" height="70%">
            <PieChart>
                <Pie data={ data } cx="56%" dataKey="distance" label={ renderLabel } labelLine={ false} fill="#8884d8">
                    { data.map((entry, index): JSX.Element => {
                        return <Cell key={ `cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    })}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
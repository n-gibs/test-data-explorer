import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type ChartData = {
    name: string;
    amount: number;
};

type Props = {
    data: ChartData[];
};

const GoodBadChart = (props: Props): React.ReactElement => {
    return (
        <BarChart
            width={650}
            height={300}
            data={props.data}
            margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={'amount'} fill='#8884d8' />
        </BarChart>
    );
};

export default GoodBadChart;

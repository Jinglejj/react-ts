import React, { useRef } from 'react';
import { Gpa } from '../../type';
import { Line } from '@ant-design/charts';
import { Card } from 'antd'
type Props = {
    data: Array<Gpa>
}

function CreditsChart(props: Props) {
    const { data } = props;
    const config = {
        data,
        height: 300,
        xField: 'date',
        yField: 'gpa',
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        },
    };
    const ref = useRef();
    return (
        <Card style={{marginTop:32}}>
            <Line {...config} chartRef={ref} />
        </Card>
    )

}

export default CreditsChart;
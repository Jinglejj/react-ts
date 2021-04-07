import React from 'react'
import { Card, Statistic, Row, Col } from 'antd';
import {Score,GoodGrade} from '../../type'

type Props = {
    overallScore: {
        totalScore: Score,
        aveScore: Score,
        aveGpa: Score
    },
    goodGrade: Array<GoodGrade>
}

function StuScore(props: Props) {
    const { overallScore, goodGrade } = props;
    const statistic = goodGrade.map(e => (
        <Col span={8} key={e.subject}>
            <Card>
                <Statistic
                    title={e.subject}
                    value={e.score}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                />
            </Card>
        </Col>))
    return (<Card title="个人成绩分析" >
        <p>综合成绩{overallScore.totalScore.score}分，超越本专业{overallScore.totalScore.precent}%的人</p>
        <p>平均综合总成绩{overallScore.aveScore.score}分，超越本专业{overallScore.aveScore.precent}%的人</p>
        <p>平均学分绩点{overallScore.aveGpa.score}分，超越本专业{overallScore.aveGpa.precent}%的人</p>

        <Row gutter={16}>
            {statistic}
        </Row>
    </Card>)
}

export default StuScore;
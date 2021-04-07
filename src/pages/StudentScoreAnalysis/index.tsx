import React, { Component } from 'react';
import StudentInfo from './components/StudentInfo/index'
import StuScore from './components/StuScore/index'
import GpaChart from './components/AcademicCreditsChart/index'
import { Row, Col, Card, Input } from 'antd'
import { Student } from './type'
interface State {
    inputValue: string,
    student: Student
}
class StudentScoreAnalysis extends Component<any, State> {


    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: '',
            student: {
                stuName: "朱坤",
                imageUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
                stuMajor: "软件工程",
                stuClass: "RB软工卓越171",
                overallScore: {
                    totalScore: { score: 86, precent: 87.1 },
                    aveScore: { score: 83, precent: 84.6 },
                    aveGpa: { score: 82, precent: 76.2 }
                },
                goodGrade: [{
                    subject: '大学语文',
                    score: 87,
                }, {
                    subject: '高等数学',
                    score: 94,
                }, {
                    subject: '计算机组成原理',
                    score: 97,
                }],
                gpaList:[{
                    date:'2017-2018年第一学期',
                    gpa:3.2
                },{
                    date:'2017-2018年第二学期',
                    gpa:3.3
                },{
                    date:'2018-2019年第一学期',
                    gpa:3.6
                },{
                    date:'2018-2019年第二学期',
                    gpa:3.7
                },{
                    date:'2019-2020年第一学期',
                    gpa:3.5
                },{
                    date:'2019-2020年第二学期',
                    gpa:3.6
                },]
            }
        }
    }


    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSearch = (value: string) => {
        //todo
        console.log(value);
    }

    render() {

        const { student } = this.state;

        const Search = <Input.Search
            style={{ width: 300 }}
            placeholder="请输入学号"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onSearch={this.handleSearch}
            enterButton />

        return (
            <Card title={Search}>
                <Row gutter={100} style={{ marginTop: 16 }}>
                    <Col span={4} >
                        <StudentInfo
                            stuName={student.stuName}
                            imageUrl={student.imageUrl}
                            stuMajor={student.stuMajor}
                            stuClass={student.stuClass}
                        />
                    </Col>
                    <Col span={12}>
                        <StuScore
                            overallScore={student.overallScore}
                            goodGrade={student.goodGrade} />
                    </Col>
                    <Col span={16}>
                        <GpaChart data={student.gpaList}/>
                    </Col>
                </Row>
            </Card>)
    }
}

export default StudentScoreAnalysis;
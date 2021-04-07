export type Score = {
    score: number,
    precent: number
}
export type GoodGrade = {
    subject: string, score: number
}
export type Gpa={
    date:string,
    gpa:number
}
export interface Student {
    stuName: string,
    imageUrl: string,
    stuMajor: string,
    stuClass: string,
    overallScore: {
        totalScore: Score,
        aveScore: Score,
        aveGpa: Score
    },
    goodGrade: Array<GoodGrade>,
    gpaList:Array<Gpa>,
}



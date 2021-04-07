import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;
type Props = {
  stuName: string,
  stuMajor: string,
  stuClass: string,
  imageUrl: string
}
function StudentInfo(props: Props) {
  const { stuName, imageUrl, stuClass, stuMajor } = props;
  return (<Card cover={
    <img
      alt="example"
      src={imageUrl}
    />
  }>
    <Meta
      title={stuName}
      description={`${stuMajor} ${stuClass}`}
    />
  </Card>)
}

export default StudentInfo;
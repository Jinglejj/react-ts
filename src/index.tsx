import * as React from 'react'
import * as ReactDOM from "react-dom";
import './style/index.scss'
import StudentScoreAnalysis from './pages/StudentScoreAnalysis/index'
ReactDOM.render(
  <div style={{margin:"0 24px"}}>
  <StudentScoreAnalysis/>
  </div>,
  document.getElementById("app")
);

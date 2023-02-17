import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// )
// const pVirtualDOM = React.createElement('p',null,'Hello vritual DOM world!')
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   pVirtualDOM
// );

// const children = [
//   <li>
//     <a href="https://www.google.com" target="_blank">
//       <p>go to Google </p>
//     </a>
//   </li>,
//   <li>
//     <a href="https://www.facebook.com" target="_blank">
//       <p>go to Facebook </p>
//     </a>
//   </li>, 
//   <li>
//     <a href="https://www.instagram.com" target="_blank">
//       <p>go to instagram </p>
//     </a>
//   </li> 
// ]

// const rootVirtuarlDOM = <ul>{children}</ul>
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtuarlDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import * as D from './data'

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))
const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
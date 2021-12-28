// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// =============================================================================================
// import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

// const element = React.createElement('div', {
//    a: 5,
//    b: 7
// }, 'Привіт світ');
// console.log(element);
// ReactDom.render(element, document.querySelector('#root'));

// const elem1 = <span>Привіт</span>
// const elem2 = <span>мір</span>

// const jsxElementt =( <div>
//    {elem1 }
//    { elem2}
// </div>)
// console.log(jsxElementt);

ReactDom.render(<App />, document.querySelector('#root'))


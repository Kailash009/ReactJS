import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomerForm,{DisplayData} from './components/newCustomer';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CustomerForm/>
  </>
);









// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {NavBar} from './components/NavBar';
// import TestCom from './components/TestCom';
// import MyComponent from './components/test';
// import ConvertIntoUpper from './components/ConvertUpper';

// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// var obj={var1:'Option1',var2:'Option2',var3:'Option3',var4:'Option4'};
// var arr1=[4,2,8,1];
// root.render(
//   <React.StrictMode>
//     {/* <NavBar companyName="CETPA" menu2="Download" dropdown={obj} arr={arr1} url="https://legacy.reactjs.org/docs/getting-started.html"/>
//     <TestCom/>
//     <MyComponent name="Kailash Chandra Joshi"/> */}
//     <ConvertIntoUpper/>
//   </React.StrictMode>
// );
// // root.render(
// //   "This is my First React App."
// // );
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import store from './store';

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, 
    document.getElementById('root'));
};

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();

//Update the app rendering whenever state in Redux store changes
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

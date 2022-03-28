import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import LogForm from './components/LogForm';
import ToDoList from './components/ToDoList';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<><Welcome/> <LogForm/></>} />
            <Route path="todo" element={<ToDoList/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

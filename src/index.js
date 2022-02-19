import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import blogReducer from './features/Blogs';

const store = configureStore({
  
  reducer:{
    blogs: blogReducer
  },
  
});

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);



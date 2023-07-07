import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <App />
        <ToastContainer position='top-right' autoClose={3000} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);

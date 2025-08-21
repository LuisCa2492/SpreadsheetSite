import React from 'react'
import ReactDOM from 'react-dom/client'
import AppSpreadsheet from './AppSpreadsheet.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Theme from './misc/Theme.jsx';
import { Provider } from 'react-redux'
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>

        <BrowserRouter>
          <AppSpreadsheet />
        </BrowserRouter>
      </Provider>

    </ThemeProvider>
  </React.StrictMode>,
)

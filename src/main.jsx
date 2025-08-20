import React from 'react'
import ReactDOM from 'react-dom/client'
import AppSpreadsheet from './AppSpreadsheet.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Theme from './misc/Theme.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <AppSpreadsheet />
      </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>,
)

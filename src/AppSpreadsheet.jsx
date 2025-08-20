import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import AddCombo from './components/AddCombo';
import SideBar from './ui/SideBar';
import Box from '@mui/material/Box';
import ShowAll from './components/ShowAll';
const AppSpreadsheet = () => {
  const drawerWidth = 240;
  const [count, setCount] = useState(0)

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />

        {/* Contenedor principal para el contenido de las rutas */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: `${drawerWidth}px`, // deja espacio para el Drawer
          }}
        >
          <Routes>
            <Route path="/new" element={<AddCombo texto="Nuevo combo" />} />
            <Route path="/all" element={<ShowAll texto="Nuevo combo" />} />
            <Route path="/*" element={<Navigate to="/new" />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default AppSpreadsheet

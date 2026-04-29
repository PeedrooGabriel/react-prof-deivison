import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Hero from './components/Hero';
import IoTTech from './components/IoTTech';
import Crops from './components/Crops';
import Soils from './components/Soils';

const theme = createTheme({
  palette: {
    primary: { main: '#1b5e20' },
    secondary: { main: '#2e7d32' },
    background: { default: '#fafafa' },
    text: { primary: '#2c3e50', secondary: '#7f8c8d' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <IoTTech />
      <Crops />
      <Soils />
      <Box component="footer" sx={{ bgcolor: '#212121', color: 'white', py: 3, mt: 'auto', textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2026 Catálogo do Agronegócio Brasileiro.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
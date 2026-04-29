import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const crops = [
  { name: 'Soja', icon: '🌱' },
  { name: 'Milho', icon: '🌽' },
  { name: 'Cana-de-açúcar', icon: '🎋' },
  { name: 'Algodão', icon: '☁️' }
];

function Crops() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: '#f4fbf4' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom color="textSecondary" sx={{ mb: 4 }}>
          Principais Culturas
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {crops.map((crop) => (
            <Paper 
              key={crop.name} 
              elevation={3} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                borderRadius: 2, 
                bgcolor: 'white', 
                minWidth: '200px',
                flex: '0 1 auto'
              }}
            >
              <Typography variant="h1" sx={{ mb: 2 }}>{crop.icon}</Typography>
              <Typography variant="h5" color="secondary" fontWeight="bold">{crop.name}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Crops;
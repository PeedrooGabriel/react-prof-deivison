import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

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
        <Typography variant="h3" align="center" gutterBottom color="textSecondary">
          Principais Culturas
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {crops.map((crop) => (
            <Grid item xs={12} sm={6} md={3} key={crop.name}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: 'white' }}>
                <Typography variant="h1" sx={{ mb: 2 }}>{crop.icon}</Typography>
                <Typography variant="h5" color="secondary" fontWeight="bold">{crop.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Crops;   
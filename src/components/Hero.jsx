import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Hero() {
  return (
    <Box
      component="header"
      sx={{
        background: 'linear-gradient(135deg, rgba(16, 69, 29, 0.9) 0%, rgba(39, 174, 96, 0.7) 100%), url("https://images.unsplash.com/photo-1594498653385-d5172b532c00?q=80&w=2070") center/cover',
        height: '80vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          A Força do Agronegócio Brasileiro
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Potência, tecnologia e produtividade no campo com o melhor maquinário e solo.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<AgricultureIcon />}
          sx={{
            backgroundColor: '#f1c40f',
            color: '#2c3e50',
            fontWeight: 'bold',
            padding: '12px 30px',
            '&:hover': { backgroundColor: '#f39c12' }
          }}
          onClick={() => scrollToSection('iot-tech')}
        >
          Explorar Tecnologia
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
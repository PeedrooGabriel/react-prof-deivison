import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import SensorsIcon from '@mui/icons-material/Sensors';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const techData = [
  {
    title: 'Mercado de IoT no Agro',
    icon: <MemoryIcon fontSize="large" color="primary" />,
    desc: 'A integração de IoT na agricultura e pecuária está projetada para movimentar US$ 18,1 bilhões até 2026. A exigência global por eficiência e resiliência climática consolidou a infraestrutura digital como elemento central da produção rural.'
  },
  {
    title: 'Sensores Hiperconectados',
    icon: <SensorsIcon fontSize="large" color="primary" />,
    desc: 'Redes de sensores de alta precisão executam leituras simultâneas de umidade, temperatura e maquinário. O envio automático para a nuvem fundamenta a gestão hídrica inteligente e a aplicação exata de insumos.'
  },
  {
    title: 'Drones e IA Autônoma',
    icon: <FlightTakeoffIcon fontSize="large" color="primary" />,
    desc: 'VANTs (Veículos Aéreos Não Tripulados) operam no mapeamento autônomo e pulverização com mínima deriva. O sensoriamento remoto alimenta modelos de Inteligência Artificial para detecção precoce de anomalias no cultivo.'
  }
];

function IoTTech() {
  return (
    <Box id="iot-tech" component="section" sx={{ py: 8, bgcolor: '#fdfdfd' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom color="textSecondary" fontWeight="500">
          IoT e Tecnologia no Agronegócio
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {techData.map((tech, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, textAlign: 'center', boxShadow: 2 }}>
                {tech.icon}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="primary" sx={{ mt: 2 }}>
                    {tech.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {tech.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default IoTTech;
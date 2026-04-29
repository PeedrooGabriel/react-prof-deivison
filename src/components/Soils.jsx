import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const soils = [
  {
    type: 'Latossolo',
    desc: 'Representam aproximadamente 31% do território brasileiro. São solos profundos, altamente porosos e com excelente drenagem. Apesar da elevada acidez e baixa fertilidade natural — resultantes de intenso intemperismo —, respondem de forma superior a técnicas de correção (calagem) e adubação. Formam a base estrutural da produtividade em biomas como o Cerrado.'
  },
  {
    type: 'Terra Roxa (Nitossolo Vermelho / Latossolo Roxo)',
    desc: 'Originado da decomposição de rochas vulcânicas (basalto e diabásio), destaca-se pela coloração avermelhada profunda e altíssima fertilidade natural. Possui textura argilosa e altos níveis de magnetização. Historicamente associado ao ciclo do café, é atualmente explorado em regime de alta performance para o cultivo de soja, milho e cana-de-açúcar.'
  },
  {
    type: 'Massapê (Argissolo / Vertissolo)',
    desc: 'Solo predominante no litoral do Nordeste brasileiro, notável por sua coloração escura e textura extremamente argilosa. Apresenta capacidade ímpar de retenção de água e preservação de nutrientes. Sua estrutura morfológica o consolida como um recurso altamente produtivo, sustentando o cultivo secular de cana-de-açúcar na região.'
  },
  {
    type: 'Chernossolo',
    desc: 'Caracteriza-se pela presença de um horizonte superficial rico em matéria orgânica, cálcio e magnésio, garantindo coloração escura e alta fertilidade natural (elevada CTC - Capacidade de Troca Catiônica). Devido às suas propriedades físicas, requer protocolos rigorosos de manejo e práticas conservacionistas para mitigar riscos de erosão hídrica em áreas declivosas.'
  }
];

function Soils() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom color="textSecondary">
          Perfil dos Solos Produtivos Brasileiros
        </Typography>
        <Box sx={{ mt: 4 }}>
          {soils.map((soil, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                <Typography variant="h6" color="primary">{soil.type}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  {soil.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Soils;
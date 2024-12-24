import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { QUESTIONS_ANSWERS } from '../../utils/constants';

const QA = ({ question, answer, expanded, onExpanded, index }) => {
  return (
    <Accordion
      elevation={0}
      onClick={onExpanded}
      expanded={expanded}
      sx={{
        '&.MuiPaper-root': {
          background: 'transparent',
          color: 'white',
          '&.MuiAccordion-root': {
            '::before': {
              backgroundColor: '#FFFFFF80',
            },
          },
        },
        '&.Mui-expanded': {
          m: 0,
          borderTop: index !== 0 && '1px solid #FFFFFF80',
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? null : <ExpandMoreIcon sx={{ color: 'white' }} />
        }
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography
          letterSpacing={1.2}
          fontWeight={400}
          fontSize={[18, 20]}
          sx={{ my: 1.5 }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ background: '#ffffff0d', borderRadius: 1, p: [2, 4] }}
      >
        <Typography fontSize={[16, 18]}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState(0);

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #2E517D, #4E7BB5)',
        py: 4,
        color: 'white',
      }}
    >
      <Container
        sx={{
          width: 1,
          py: '5vh',
        }}
      >
        <Typography
          align="center"
          fontSize={[24, 32]}
          fontWeight={600}
          letterSpacing={2}
          sx={{ mb: 8 }}
        >
          Frequently Asked Questions
        </Typography>
        <Box
          sx={{
            display: ['block', 'flex'],
            flexDirection: 'row-reverse',
            alignItems: 'start',
            gap: 10,
          }}
        >
          <Box sx={{ width: ['60%', '50%'], mx: 'auto', mb: [4, 0] }}>
            <img
              src="assets/SVGs/FAQ.svg"
              alt="FAQ"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ width: 1 }}>
            {QUESTIONS_ANSWERS.map((qaBlock, index) => (
              <QA
                key={index}
                question={qaBlock.question}
                answer={qaBlock.answer}
                expanded={isExpanded === index}
                onExpanded={() => setIsExpanded(index)}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

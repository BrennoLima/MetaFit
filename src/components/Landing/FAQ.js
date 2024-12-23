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
        aria-controls="panel1-content"
        id="panel1-header"
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

const QUESTIONS_ANSWERS = [
  {
    question: 'What is MetaFit about?',
    answer:
      'MetaFit is an AI-powered fitness coach designed to create personalized workout routines and nutrition plans tailored to your fitness goals, lifestyle, and body type.',
  },
  {
    question: 'How does the MetaFit create my plan?',
    answer:
      'MetaFit uses your input, such as age, weight, activity level, and goals (e.g., weight loss, muscle gain, or maintaining fitness), to generate a customized program that evolves with your progress.',
  },
  {
    question: 'Can I track my progress?',
    answer:
      'Yes! MetaFit includes tools to track your weight, muscle gain, calorie intake, and workout performance to ensure you’re on track to meet your goals.',
  },
  {
    question: 'Is MetaFit suitable for beginners?',
    answer:
      'Absolutely! MetaFit provides step-by-step guidance, making it ideal for beginners, while also challenging seasoned fitness enthusiasts.',
  },
  {
    question: 'Can I adjust my plan if my goals change?',
    answer:
      'Yes, you can update your goals at any time, and MetaFit will create a new plan to fit your updated objectives.',
  },
];

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
          <Box sx={{ width: ['60%', '45%'], mx: 'auto', mb: [4, 0] }}>
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

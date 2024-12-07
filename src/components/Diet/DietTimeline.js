import React, { useEffect, useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Box, Container, IconButton, Tooltip, Typography } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { v4 as uuidv4 } from 'uuid';

import MealCard from './MealCard';
import DailySummaryBoard from './DailySummaryBoard';
import { getTimestamp } from '../../utils/getTimestamp';
import { HARDCODED_DIET } from '../../utils/constants';

const timeNow = new Date().getTime();

function DietTimeline() {
  const [consumedMacros, setConsumedMacros] = useState(null);
  const [diet, setDiet] = useState(HARDCODED_DIET);

  const calculateMacros = diet => {
    // This function calculates (calories, carbs, proteins, and fats) that should have been consumed based on meal completion
    const consumedMacros = {
      calories: 0,
      carbs: 0,
      proteins: 0,
      fats: 0,
    };
    diet?.meals.map(meal => {
      if (meal.completed) {
        consumedMacros.calories += meal.calories;
        consumedMacros.carbs += meal.carbs;
        consumedMacros.proteins += meal.proteins;
        consumedMacros.fats += meal.fats;
      }
      return null;
    });
    return consumedMacros;
  };

  const toggleMealCompletion = mealToUpdate => {
    setDiet(prev => ({
      ...prev,
      meals: prev.meals.map(meal =>
        meal === mealToUpdate ? { ...meal, completed: !meal.completed } : meal
      ),
    }));
  };

  const markMealCompletionBasedOnTime = diet => {
    return {
      ...diet,
      meals: diet.meals.map(meal => ({
        ...meal,
        completed: timeNow >= getTimestamp(meal.time),
      })),
    };
  };

  useEffect(() => {
    setDiet(prev => markMealCompletionBasedOnTime(prev));
  }, []);

  useEffect(() => {
    // Whenever the diet object updates, re-calculate macros based on completion
    setConsumedMacros(calculateMacros(diet));
  }, [diet]);

  return (
    <Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
      <Container maxWidth="md">
        <DailySummaryBoard
          summary={diet?.dailySummary}
          consumedMacros={consumedMacros}
        />
        <Timeline
          sx={{
            p: 0,
            '& .MuiTimelineOppositeContent-root': {
              flex: 0,
              paddingLeft: 0,
              '> p': {
                width: '65px',
              },
            },
          }}
        >
          {diet?.meals.map((mealItem, index) => (
            <TimelineItem key={uuidv4()}>
              <TimelineOppositeContent sx={{ mt: 1 }}>
                <Typography variant="body2" fontWeight="semi-bold">
                  {mealItem.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color={mealItem.completed ? 'success' : 'warning'}
                  sx={{ p: 0 }}
                >
                  <Tooltip
                    title={
                      mealItem.completed
                        ? 'Mark as incompleted'
                        : 'Mark as completed'
                    }
                  >
                    <IconButton
                      onClick={() => toggleMealCompletion(mealItem)}
                      sx={{ p: 0, color: 'white' }}
                    >
                      {mealItem.completed ? (
                        <TaskAltOutlinedIcon fontSize="small" />
                      ) : (
                        <AccessTimeOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Tooltip>
                </TimelineDot>
                <TimelineConnector sx={{ width: '1px', my: 1 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ mt: -1, mb: 4 }}>
                <MealCard summary={diet?.dailySummary} meal={mealItem} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default DietTimeline;

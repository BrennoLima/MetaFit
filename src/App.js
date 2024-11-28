import React, { useState } from 'react';
import {
	LoadingButton,
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
} from '@mui/lab';
import { Box, Container, Typography } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { v4 as uuidv4 } from 'uuid';
import OpenAI from 'openai';

import MealCard from './components/MealCard';
import DailySummaryBoard from './components/DailySummaryBoard';
import { getTimestamp } from './utils/getTimestamp';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [consumedMacros, setConsumedMacros] = useState(null);
	const [diet, setDiet] = useState(null);
	const timeNow = new Date().getTime();
	const openai = new OpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});

	const generateDiet = async () => {
		setIsLoading(true);
		// const completion = await openai.chat.completions.create({
		// 	model: 'gpt-4o-mini',
		// 	messages: [
		// 		{
		// 			role: 'system',
		// 			content:
		// 				"You're an experienced nutritionist and you will create me a custom meal plan.",
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'Age: 27, Gender: Male, Weight: 85kg, Height: 165cm, Goal: Fat loss, Activity: Moderate, Gym workout 5 times a week. Diet Preferences: None, Lifestyle and schedule: at least 5 meals a day, no preference to meal timing. Health considerations: No medical conditions. Supplements: Protein and vitamins',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'Adjust the diet to my day schedule: wake up at 5:30am, exercise from 6am to 7:30 am, sleep at 10pm. I should always have a meal before my workout',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'For the output ONLY THE FOLLOWING JSON OBJECT SHOULD BE RETURNED, no extra strings: `{"dailySummary": { "calories": number; "proteins": number; "carbs": number; "fats": number; }; "meals": { "name": string; "time": string; "content": {"name": string, "quantity": string}[]; "calories": number, "proteins": number, "carbs": number, "fats": number }[];}`',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content: 'the dailySummary object has to match the sum of calories, carbs, proteins, and fats of all meals together'
		// 		},
		// 	],
		// });
		// console.log(completion.choices[0].message.content);
		// console.log(JSON.parse(completion.choices[0].message.content));
		// setDiet(JSON.parse(completion.choices[0].message.content));

		// hardcoded diet to save $$$ on development mode
		const diet = {
			dailySummary: {
				calories: 2500,
				proteins: 180,
				carbs: 250,
				fats: 90,
			},
			meals: [
				{
					name: 'Pre-Workout Meal',
					time: '5:45 AM',
					content: [
						{ name: 'Oatmeal', quantity: '50g' },
						{ name: 'Banana', quantity: '1 medium' },
						{ name: 'Whey Protein Shake', quantity: '1 scoop' },
					],
					calories: 400,
					proteins: 30,
					carbs: 60,
					fats: 10,
				},
				{
					name: 'Post-Workout Breakfast',
					time: '8:00 AM',
					content: [
						{ name: 'Scrambled Eggs', quantity: '3 large' },
						{ name: 'Whole Grain Toast', quantity: '2 slices' },
						{ name: 'Avocado', quantity: '50g' },
					],
					calories: 500,
					proteins: 30,
					carbs: 40,
					fats: 25,
				},
				{
					name: 'Mid-Morning Snack',
					time: '10:30 AM',
					content: [
						{ name: 'Greek Yogurt', quantity: '200g' },
						{ name: 'Mixed Berries', quantity: '100g' },
					],
					calories: 250,
					proteins: 20,
					carbs: 30,
					fats: 5,
				},
				{
					name: 'Lunch',
					time: '1:00 PM',
					content: [
						{ name: 'Grilled Chicken Breast', quantity: '150g' },
						{ name: 'Quinoa', quantity: '100g' },
						{ name: 'Steamed Broccoli', quantity: '100g' },
					],
					calories: 600,
					proteins: 50,
					carbs: 60,
					fats: 15,
				},
				{
					name: 'Afternoon Snack',
					time: '4:00 PM',
					content: [
						{ name: 'Hummus', quantity: '100g' },
						{ name: 'Carrot Sticks', quantity: '100g' },
					],
					calories: 200,
					proteins: 5,
					carbs: 30,
					fats: 10,
				},
				{
					name: 'Dinner',
					time: '7:00 PM',
					content: [
						{ name: 'Baked Salmon', quantity: '150g' },
						{ name: 'Sweet Potato', quantity: '200g' },
						{ name: 'Mixed Salad', quantity: '150g' },
					],
					calories: 550,
					proteins: 45,
					carbs: 30,
					fats: 25,
				},
			],
		};
		setDiet(diet);
		setConsumedMacros(calculateMacros(diet));
		setIsLoading(false);
	};

	const calculateMacros = (diet) => {
		// This function calculates (calories, carbs, proteins, and fats) that should have been consumed by the current time
		const consumedMacros = {
			calories: 0,
			carbs: 0,
			proteins: 0,
			fats: 0,
		};
		diet?.meals.map((meal) => {
			if (timeNow >= getTimestamp(meal.time)) {
				consumedMacros.calories += meal.calories;
				consumedMacros.carbs += meal.carbs;
				consumedMacros.proteins += meal.proteins;
				consumedMacros.fats += meal.fats;
			}
			return null;
		});
		return consumedMacros;
	};

	return (
		<Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
			<Container maxWidth='md'>
				<LoadingButton
					loading={isLoading}
					variant='contained'
					onClick={generateDiet}
				>
					Generate diet
				</LoadingButton>
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
								<Typography variant='body2' fontWeight='semi-bold'>
									{mealItem.time}
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot
									color={
										timeNow >= getTimestamp(mealItem.time)
											? 'success'
											: 'warning'
									}
									sx={{ p: 0 }}
								>
									{timeNow >= getTimestamp(mealItem.time) ? (
										<TaskAltOutlinedIcon fontSize='small' />
									) : (
										<AccessTimeOutlinedIcon fontSize='small' />
									)}
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

export default App;

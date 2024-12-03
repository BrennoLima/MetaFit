import React, { useState } from 'react';
import { Box } from '@mui/material';
import OpenAI from 'openai';

import UserInformation from './components/InfoGathering/UserInformation';
import DietTimeline from './components/Diet/DietTimeline';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [diet, setDiet] = useState(null);
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
		// 				'For the output ONLY THE FOLLOWING JSON OBJECT SHOULD BE RETURNED, no extra strings: `{"dailySummary": { "calories": number; "proteins": number; "carbs": number; "fats": number; }; "meals": { "name": string; "time": string; "content": {"name": string, "quantity": string}[]; "calories": number, "proteins": number, "carbs": number, "fats": number, completed: false }[];}`',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'the dailySummary object has to match the sum of calories, carbs, proteins, and fats of all meals together',
		// 		},
		// 	],
		// });
		// const diet = JSON.parse(completion.choices[0].message.content);
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
					completed: false,
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
					completed: false,
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
					completed: false,
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
					completed: false,
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
					completed: false,
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
					completed: false,
				},
			],
		};

		setTimeout(() => {
			// Simulates 4s loading
			setDiet(diet);
			setIsLoading(false);
		}, 4000);
	};

	return (
		<Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
			{!diet ? (
				<UserInformation generateDiet={generateDiet} loadingDiet={isLoading} />
			) : (
				<DietTimeline userDiet={diet} />
			)}
		</Box>
	);
}

export default App;

import React, { useState } from 'react';
import { Box } from '@mui/material';
import OpenAI from 'openai';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import UserInformation from './components/InfoGathering/UserInformation';
import DietTimeline from './components/Diet/DietTimeline';

dayjs.extend(relativeTime);

const activityLevelRelationTable = {
	1: '0 hours of exercise a week',
	2: '2 hours of exercise a week',
	3: '5 hours of exercise a week',
	4: '10 hours of exercise a week',
	5: '12 hours or more of exercise a week',
};

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [diet, setDiet] = useState(null);
	const [userInfo, setUserInfo] = useState({
		gender: null,
		goal: null,
		height: null,
		heightMeasurement: 'cm',
		weight: null,
		weightMeasurement: 'kg',
		birthdate: dayjs(),
		activityLevel: 1,
		wakeUpTime: null,
		sleepTime: null,
		exerciseStartTime: null,
		exerciseEndTime: null,
		allergies: [],
		allergiesOther: '',
		dietPreferences: [],
		dietPreferencesOther: '',
		medicalConditions: [],
		medicalConditionsOther: '',
	});
	const openai = new OpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});
	console.log('userInfo');
	console.log(userInfo);

	const generateDiet = async () => {
		setIsLoading(true);
		// const completion = await openai.chat.completions.create({
		// 	model: 'gpt-4o-mini',
		// 	messages: [
		// 		{
		// 			role: 'system',
		// 			content:
		// 				"You're an experienced nutritionist and you will create me a custom meal plan. Bellow is my information:",
		// 		},
		// 		{
		// 			role: 'system',
		// 			content: `Gender: ${userInfo.gender}, Height: ${userInfo.height}${
		// 				userInfo.heightMeasurement
		// 			}, Weight: ${userInfo.weight}${
		// 				userInfo.weightMeasurement
		// 			}, Age: ${dayjs().from(dayjs(userInfo.birthdate), true)}`,
		// 		},
		// 		{
		// 			role: 'system',
		// 			content: `Goal: ${userInfo.goal}, Activity level: ${
		// 				activityLevelRelationTable[userInfo.activityLevel]
		// 			}, `,
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'Diet Preferences: None, Health considerations: No medical conditions. Supplements: Protein and vitamins',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content: `Adjust the diet to my day schedule: Wake up: 5:20am, Exercise: 6:00am to 7:30am, Sleep: 10:00pm. I should always have a meal before my workout`,
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'The output has to strictly be ONLY THE FOLLOWING JSON OBJECT SHOULD BE RETURNED, no extra strings: `{"dailySummary": { "calories": number; "proteins": number; "carbs": number; "fats": number; }; "meals": { "name": string; "time": string; "content": {"name": string, "quantity": string}[]; "calories": number, "proteins": number, "carbs": number, "fats": number, completed: false }[];}`',
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'the dailySummary object has to match the sum of calories, carbs, proteins, and fats of all meals together',
		// 		},
		// 	],
		// });
		// const diet = JSON.parse(completion.choices[0].message.content);
		// setDiet(diet);
		// setIsLoading(false);
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

	const updateUserInfo = (name, value) => {
		setUserInfo((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
			{!diet ? (
				<UserInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					generateDiet={generateDiet}
					loadingDiet={isLoading}
				/>
			) : (
				<DietTimeline userDiet={diet} />
			)}
		</Box>
	);
}

export default App;

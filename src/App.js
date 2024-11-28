import React, { useState } from 'react';
import {
	LoadingButton,
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
} from '@mui/lab';
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Container, Typography } from '@mui/material';
import OpenAI from 'openai';

import MealCard from './components/MealCard';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [diet, setDiet] = useState(null);
  const { isAuthenticated } = useAuth0();

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
		// 				"You're an experienced nutritionist and you will create me a custom meal plan. Keeping in mind my wake up, sleep and exercise time.",
		// 		},
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'For the output ONLY THE FOLLOWING JSON OBJECT SHOULD BE RETURNED, no extra strings: `{"dailySummary": { "calories": string; "protein": string; "carbs": string; "fats": string; }; "meals": { "name": string; "time": string; "content": {"name": string, "quantity": string}[]; "calories": string, "protein": string, "carbs": string, "fats": string }[];}`',
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
		// 	],
		// });
		// console.log(completion.choices[0].message.content);
		// console.log(JSON.parse(completion.choices[0].message.content));
		// setDiet(JSON.parse(completion.choices[0].message.content));

		// hardcoded diet to save $$$ on development mode
		setDiet({
			dailySummary: {
				calories: '2200',
				protein: '180g',
				carbs: '200g',
				fats: '70g',
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
					calories: '400',
					protein: '30g',
					carbs: '60g',
					fats: '10g',
				},
				{
					name: 'Post-Workout Breakfast',
					time: '8:00 AM',
					content: [
						{ name: 'Scrambled Eggs', quantity: '3 large' },
						{ name: 'Whole Grain Toast', quantity: '2 slices' },
						{ name: 'Avocado', quantity: '50g' },
					],
					calories: '500',
					protein: '30g',
					carbs: '40g',
					fats: '25g',
				},
				{
					name: 'Mid-Morning Snack',
					time: '10:30 AM',
					content: [
						{ name: 'Greek Yogurt', quantity: '200g' },
						{ name: 'Mixed Berries', quantity: '100g' },
					],
					calories: '250',
					protein: '20g',
					carbs: '30g',
					fats: '5g',
				},
				{
					name: 'Lunch',
					time: '1:00 PM',
					content: [
						{ name: 'Grilled Chicken Breast', quantity: '150g' },
						{ name: 'Quinoa', quantity: '100g' },
						{ name: 'Steamed Broccoli', quantity: '100g' },
					],
					calories: '600',
					protein: '50g',
					carbs: '60g',
					fats: '15g',
				},
				{
					name: 'Afternoon Snack',
					time: '4:00 PM',
					content: [
						{ name: 'Hummus', quantity: '100g' },
						{ name: 'Carrot Sticks', quantity: '100g' },
					],
					calories: '200',
					protein: '5g',
					carbs: '30g',
					fats: '10g',
				},
				{
					name: 'Dinner',
					time: '7:00 PM',
					content: [
						{ name: 'Baked Salmon', quantity: '150g' },
						{ name: 'Sweet Potato', quantity: '200g' },
						{ name: 'Mixed Salad', quantity: '150g' },
					],
					calories: '550',
					protein: '45g',
					carbs: '30g',
					fats: '25g',
				},
			],
		});
		setIsLoading(false);
	};
  
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    );
  };

	return (
		<Container maxWidth='lg'>
    
    {isAuthenticated ? (
		<>
      <LoadingButton
          loading={isLoading}
          variant='contained'
          onClick={generateDiet}
        >
          Generate diet
      </LoadingButton>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}
      >
        {diet?.meals.map((mealItem, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ mt: '3px' }}>
              <Typography variant='body2' fontWeight='medium'>
                {mealItem.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{ background: '#DDD', width: '1px', height: '1px' }}
              />
              <TimelineConnector sx={{ width: '1px', my: 1 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: -2, mb: 2 }}>
              <MealCard meal={mealItem} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
    ) : (
        <>
          <h1>Log in to generate a diet plan</h1>
          <LoginButton />
        </>
      )}
	</Container>
	);
}

export default App;

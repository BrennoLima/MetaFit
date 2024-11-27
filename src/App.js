import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Container from '@mui/material/Container';
import OpenAI from 'openai';

import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

function App() {
	const { isAuthenticated} = useAuth0();
	const [isLoading, setIsLoading] = useState(false);
	const [diet, setDiet] = useState('');

	const openai = new OpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});

	const generateDiet = async () => {
		setIsLoading(true);
		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content:
						"You're an experienced nutritionist and you will create me a custom meal plan. Keeping in mind my wake up, sleep and exercise time.",
				},
				{
					role: 'system',
					content:
						'Output should strictly follow this format: `{"dailySummary": { "calories": string; "protein": string; "carbs": string; "fats": string; }; "meals": { "name": string; "time": string; "content": {"name": string, "quantity": string}[]; "calories": string, "protein": string, "carbs": string, "fats": string }[];}` ONLY THE JSON OBJECT SHOULD BE RETURNED.',
				},
				{
					role: 'system',
					content:
						'Age: 27, Gender: Male, Weight: 85kg, Height: 165cm, Goal: Fat loss, Activity: Moderate, Gym workout 5 times a week. Diet Preferences: None, Lifestyle and schedule: at least 5 meals a day, no preference to meal timing. Health considerations: No medical conditions. Supplements: Protein and vitamins',
				},
				{
					role: 'system',
					content:
						'Adjust the diet to my day schedule: wake up at 5:30am, exercise from 6am to 7:30 am, sleep at 10pm. I should always have a meal before my workout',
				},
			],
		});
		setDiet(completion.choices[0].message.content);
		console.log(JSON.parse(completion.choices[0].message.content));
		setIsLoading(false);
	};

	const LoginButton = () => {
		const { loginWithRedirect } = useAuth0();

		return <button onClick={() => loginWithRedirect()}>Log In</button>;
	};

	const LogoutButton = () => {
		const { logout } = useAuth0();

		return (
			<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
				Log Out
			</button>
		);
	};

	return (
		<Container>
			{isAuthenticated ?
				(
					<>
						<h1>Generate a diet plan</h1>
						<LogoutButton/>
						<br/><br/>
						<Profile />
						<br/><br/>
						<LoadingButton
							loading={isLoading}
							variant='contained'
							onClick={generateDiet}
						>
							Generate diet
						</LoadingButton>
						{diet}
					</>
				) : (
					<>
						<h1>Log in to generate a diet plan</h1>
						<LoginButton/>
					</>
				)
			}
		</Container>
	);
}

export default App;

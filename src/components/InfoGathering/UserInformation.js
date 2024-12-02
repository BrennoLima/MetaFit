import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import dayjs from 'dayjs';

import GenderInformation from './Steps/GenderInformation';
import GoalInformation from './Steps/GoalInformation';
import PersonalInformation from './Steps/PersonalInformation';
import LifestyleInformation from './Steps/LifestyleInformation';
import DietaryInformation from './Steps/DietaryInformation';

const UserInformation = () => {
	const [step, setStep] = useState(0);
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
	});
	console.log('userInfo');
	console.log(userInfo);
	const updateUserInfo = (name, value) => {
		setUserInfo((prev) => ({ ...prev, [name]: value }));
	};
	const nextStep = () => {
		setStep((prev) => prev + 1);
	};
	const prevStep = () => {
		setStep((prev) => prev - 1);
	};

	return (
		<Dialog fullWidth open={true} maxWidth='md'>
			{step === 0 && (
				<GenderInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					nextStep={nextStep}
				/>
			)}
			{step === 1 && (
				<GoalInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			)}
			{step === 2 && (
				<PersonalInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			)}
			{step === 3 && (
				<LifestyleInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			)}
			{step === 4 && (
				<DietaryInformation
					userInfo={userInfo}
					updateUserInfo={updateUserInfo}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			)}
		</Dialog>
	);
};

export default UserInformation;

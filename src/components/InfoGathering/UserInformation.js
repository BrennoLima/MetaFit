import React, { useState } from 'react';
import { Box, Container } from '@mui/material';

import GenderInformation from './Steps/GenderInformation';
import GoalInformation from './Steps/GoalInformation';
import PersonalInformation from './Steps/PersonalInformation';
import LifestyleInformation from './Steps/LifestyleInformation';
import DietaryInformation from './Steps/DietaryInformation';
import MedicalInformation from './Steps/MedicalInformation';
import DietLoading from './Steps/DietLoading';

const UserInformation = ({
	userInfo,
	updateUserInfo,
	generateDiet,
	isLoading,
}) => {
	const [step, setStep] = useState(0);

	const nextStep = () => {
		setStep((prev) => prev + 1);
	};
	const prevStep = () => {
		setStep((prev) => prev - 1);
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#07172b',
			}}
		>
			<Container maxWidth='md' sx={{ px: '0 !important', my: 4 }}>
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
				{step === 5 && (
					<MedicalInformation
						userInfo={userInfo}
						updateUserInfo={updateUserInfo}
						nextStep={() => {
							nextStep();
							generateDiet();
						}}
						prevStep={prevStep}
					/>
				)}
				{step === 6 && <DietLoading isLoading={isLoading} />}
			</Container>
		</Box>
	);
};

export default UserInformation;

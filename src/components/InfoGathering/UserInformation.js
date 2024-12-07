import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

import GenderInformation from './Steps/GenderInformation';
import GoalInformation from './Steps/GoalInformation';
import PersonalInformation from './Steps/PersonalInformation';
import LifestyleInformation from './Steps/LifestyleInformation';
import DietaryInformation from './Steps/DietaryInformation';
import MedicalInformation from './Steps/MedicalInformation';
import DietLoading from './Steps/DietLoading';

dayjs.extend(relativeTime);

const UserInformation = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
  const [step, setStep] = useState(0);

  // eslint-disable-next-line
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

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

    setTimeout(() => {
      // BE call so save user info
      // BE call to generate or save diet then redirect to /my-timeline
      navigate('/my-timeline');
      // Simulates 4s loading
      setIsLoading(false);
    }, 4000);
  };

  const updateUserInfo = (name, value) => {
    setUserInfo(prev => ({ ...prev, [name]: value }));
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
      <Container maxWidth="md" sx={{ px: '0 !important', my: 4 }}>
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

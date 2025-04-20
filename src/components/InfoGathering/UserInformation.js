import React, { useState, useContext } from 'react';
import {
  Box,
  Card,
  Dialog,
  Container,
  Button,
  Typography,
  LinearProgress,
  Stack,
  darken,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import OpenAI from 'openai';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

import GenderInformation from './Steps/GenderInformation';
import GoalInformation from './Steps/GoalInformation';
import PersonalInformation from './Steps/PersonalInformation';
import LifestyleInformation from './Steps/LifestyleInformation';
import DietaryInformation from './Steps/DietaryInformation';
import MedicalInformation from './Steps/MedicalInformation';
import DietLoading from './Steps/DietLoading';
import { AppContext } from '../../App';

dayjs.extend(relativeTime);

const writings = [
  {
    title: 'Welcome to the MetaFit App!',
    description:
      "We're happy that you chose us to support you on this exciting journey! To get started, we'll gather some key details about you and your goals. This information will help us create a personalized plan tailored to your lifestyle and unique needs. The first important information is you gender",
  },
  {
    title: 'What is your primary fitness goal?',
    description:
      'Based on your fitness goals, we will determine your ideal diet plan. A calorie deficit is recommended for fat loss, a calorie surplus for muscle gain, and calorie maintenance for improving overall health habits.',
  },
  {
    title: "Now, let's gather some personal information",
    description:
      'Information such as your height, weight, and birthdate helps us estimate your average calorie expenditure. Combined with your goals, this data is essential for crafting your personalized diet plan.',
  },
  {
    title: 'Share more about your lifestyle and schedule',
    description:
      'Your activity level helps determine calorie needs, while your daily routine ensures your diet aligns with your wake-up, sleep, and exercise times.',
  },
  {
    title: 'Any dietary preferences or restrictions?',
    description:
      'Let us know your preferences or restrictions to ensure your plan suits your taste and meets your needs. If no preferences, just skip to next page.',
  },
  {
    title: 'We are almost done!',
    description:
      "Share any medical conditions or concerns you may have so we can design a plan that's not only effective but also safe and aligned with your unique health needs. Your well-being is our priority, and understanding your health allows us to provide the best guidance for your journey.",
  },
  {
    title: 'Saving information and generating your diet',
    description: '',
  },
];

const UserInformation = () => {
  const navigate = useNavigate();
  const { appContext, updateAppContext } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState(
    appContext?.userInfo || {
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
    }
  );
  const [step, setStep] = useState(0);
  // eslint-disable-next-line
  // const openai = new OpenAI({
  //   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  //   dangerouslyAllowBrowser: true,
  // });

  const nextStep = () => {
    if (step === 5) {
      generateDiet();
    }
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const generateDiet = async () => {
    updateAppContext('userInfo', userInfo);
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
      navigate('/home');
      // Simulates 4s loading
    }, 4000);
  };

  const updateUserInfo = (name, value) => {
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog
      open={1}
      maxWidth="md"
      sx={{
        '& .MuiPaper-root': {
          width: 1,
        },
      }}
    >
      <Card
        sx={{
          color: 'white',
          backgroundImage:
            "url('assets/SVGs/DailySummaryBgBlob.svg'), linear-gradient(180deg, #2D507C, #4F7DB7)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150%',
          height: '75vh',
          backgroundPosition: 'top',
          width: 1,
          boxSizing: 'border-box',
          p: 4,
          pb: 2,
          overflow: 'auto',
        }}
      >
        <Stack sx={{ height: 1 }}>
          <Box
            sx={{ width: 1, display: 'flex', justifyContent: 'center', pb: 4 }}
          >
            <Box sx={{ width: '50%', color: '#1a3456' }}>
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={(100 / 6) * step}
                sx={{
                  '&.MuiLinearProgress-root': {
                    height: 5,
                    borderRadius: 2,
                    '::before': {
                      background: '#DDD',
                      opacity: 0.5,
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'stretch', gap: 4, mb: 2 }}>
              <Box sx={{ width: '150px', flexShrink: 0 }}>
                <img
                  src="assets/SVGs/Coach.svg"
                  alt="coach"
                  style={{ width: '100%' }}
                />
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize={24}>
                  {writings[step]?.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  {writings[step]?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            {step === 0 && (
              <GenderInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 1 && (
              <GoalInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 2 && (
              <PersonalInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 3 && (
              <LifestyleInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 4 && (
              <DietaryInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 5 && (
              <MedicalInformation
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
              />
            )}
            {step === 6 && <DietLoading />}
          </Box>
          {step !== 6 && (
            <Container maxWidth="sm" sx={{ px: '0 !important', py: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: step > 0 ? 'space-between' : 'flex-end',
                }}
              >
                {step > 0 && (
                  <Button
                    onClick={prevStep}
                    variant="outlined"
                    sx={{
                      color: '#FFF',
                      px: 4,
                      borderColor: '#FFF',
                      '&:hover': { background: '#0000001a' },
                    }}
                    startIcon={<KeyboardArrowLeftIcon />}
                  >
                    Back
                  </Button>
                )}

                <Button
                  disabled={userInfo.goal === null}
                  variant="contained"
                  color="secondary"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={nextStep}
                  sx={{
                    px: 4,
                    '&:hover': {
                      background: theme =>
                        darken(theme.palette.secondary.main, 0.05),
                    },
                  }}
                >
                  {step === writings.length - 1 ? 'Generate plan' : 'Next'}
                </Button>
              </Box>
            </Container>
          )}

          <Typography textAlign="center" variant="body2" sx={{ mt: 2 }}>
            * You can update all this information in your profile at any time
          </Typography>
        </Stack>
      </Card>
    </Dialog>
  );
};

export default UserInformation;

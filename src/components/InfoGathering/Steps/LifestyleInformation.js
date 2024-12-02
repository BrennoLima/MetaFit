import React from 'react';
import {
	Box,
	Button,
	Card,
	Container,
	Stack,
	Slider,
	LinearProgress,
	Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const LifestyleInformation = ({
	userInfo,
	updateUserInfo,
	nextStep,
	prevStep,
}) => {
	return (
		<Card
			sx={{
				color: 'white',
				backgroundImage:
					"url('assets/SVGs/DailySummaryBgBlob.svg'), linear-gradient(180deg, #2D507C, #4F7DB7)",
				backgroundRepeat: 'no-repeat',
				backgroundSize: '150%',
				backgroundPosition: 'top',
				height: '700px',
				width: 1,
				boxSizing: 'border-box',
				p: 4,
			}}
		>
			<Stack sx={{ height: 1 }}>
				<Box
					sx={{ width: 1, display: 'flex', justifyContent: 'center', pb: 4 }}
				>
					<Box sx={{ width: '50%', color: '#1a3456' }}>
						<LinearProgress
							color='inherit'
							variant='determinate'
							value={(100 / 6) * 4}
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
				<Box sx={{ display: 'flex', alignItems: 'stretch', gap: 4, mb: 2 }}>
					<Box sx={{ width: '150px', flexShrink: 0 }}>
						<img
							src='assets/SVGs/Coach.svg'
							alt='coach'
							style={{ width: '100%' }}
						/>
					</Box>
					<Box>
						<Typography fontWeight='bold' fontSize={24}>
							Share more about your lifestyle and schedule
						</Typography>
						<Typography sx={{ mt: 1 }}>
							Your activity level helps determine calorie needs, while your
							daily routine ensures your diet aligns with your wake-up, sleep,
							and exercise times.
						</Typography>
					</Box>
				</Box>
				<Container maxWidth='sm' sx={{ px: '0 !important', flex: 1, pb: 4 }}>
					<Stack sx={{ height: 1, justifyContent: 'space-around' }}>
						<Box>
							<Typography variant='body2' fontWeight='semi-bold'>
								Activity level
							</Typography>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: 4,
								}}
							>
								<Slider
									marks
									aria-label='activityLevel'
									color='inherit'
									min={1}
									max={5}
									value={userInfo.activityLevel}
									onChange={(e, value) =>
										updateUserInfo('activityLevel', value)
									}
									sx={{ maxWidth: '70%' }}
								/>

								<Box sx={{ flexShrink: 0, flex: 1 }}>
									{userInfo.activityLevel === 1 && (
										<>
											<Typography
												fontWeight='medium'
												fontSize={18}
												textAlign='flex-start'
											>
												Sedentary
											</Typography>
											<Typography variant='caption'>
												No weekly exercise
											</Typography>
										</>
									)}
									{userInfo.activityLevel === 2 && (
										<>
											<Typography
												fontWeight='medium'
												fontSize={18}
												textAlign='flex-start'
											>
												Light
											</Typography>
											<Typography variant='caption'>
												2h exercise a week
											</Typography>
										</>
									)}
									{userInfo.activityLevel === 3 && (
										<>
											<Typography
												fontWeight='medium'
												fontSize={18}
												textAlign='flex-start'
											>
												Moderate
											</Typography>
											<Typography variant='caption'>
												5h exercise a week
											</Typography>
										</>
									)}
									{userInfo.activityLevel === 4 && (
										<>
											<Typography
												fontWeight='medium'
												fontSize={18}
												textAlign='flex-start'
											>
												High
											</Typography>
											<Typography variant='caption'>
												10h exercise a week
											</Typography>
										</>
									)}
									{userInfo.activityLevel === 5 && (
										<>
											<Typography
												fontWeight='medium'
												fontSize={18}
												textAlign='flex-start'
											>
												Athlete
											</Typography>
											<Typography variant='caption'>
												12h+ exercise a week
											</Typography>
										</>
									)}
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Box>
								<Typography
									variant='body2'
									fontWeight='semi-bold'
									sx={{ mb: 1 }}
								>
									Wake up time
								</Typography>
								<TimePicker
									value={userInfo.wakeUpTime}
									onChange={(newValue) =>
										updateUserInfo('wakeUpTime', newValue)
									}
									sx={{
										background: '#FFF',
										borderRadius: 1,
										overflow: 'hidden',
									}}
								/>
							</Box>
							<Box>
								<Typography
									variant='body2'
									fontWeight='semi-bold'
									sx={{ mb: 1 }}
								>
									Sleep time
								</Typography>
								<TimePicker
									value={userInfo.sleepTime}
									onChange={(newValue) => updateUserInfo('sleepTime', newValue)}
									sx={{
										background: '#FFF',
										borderRadius: 1,
										overflow: 'hidden',
									}}
								/>
							</Box>
						</Box>

						<Box>
							<Typography variant='body2' fontWeight='semi-bold' sx={{ mb: 1 }}>
								Exercise time
							</Typography>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<TimePicker
									value={userInfo.exerciseStartTime}
									onChange={(newValue) =>
										updateUserInfo('exerciseStartTime', newValue)
									}
									sx={{
										background: '#FFF',
										borderRadius: 1,
										overflow: 'hidden',
									}}
								/>
								<Typography>to</Typography>
								<TimePicker
									disabled={!userInfo.exerciseStartTime}
									minTime={userInfo.exerciseStartTime}
									value={userInfo.exerciseEndTime}
									onChange={(newValue) =>
										updateUserInfo('exerciseEndTime', newValue)
									}
									sx={{
										background: '#FFF',
										borderRadius: 1,
										overflow: 'hidden',
									}}
								/>
							</Box>
						</Box>
					</Stack>
				</Container>
				<Container maxWidth='sm' sx={{ px: '0 !important' }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							py: 2,
						}}
					>
						<Button
							onClick={prevStep}
							sx={{ color: '#FFF', px: 4 }}
							startIcon={<KeyboardArrowLeftIcon sx={{ pb: '2px' }} />}
						>
							Back
						</Button>
						<Button
							disabled={
								userInfo.wakeUpTime === null ||
								userInfo.sleepTime === null ||
								userInfo.exerciseStartTime === null ||
								userInfo.exerciseEndTime === null
							}
							variant='contained'
							color='secondary'
							sx={{ px: 4 }}
							endIcon={<KeyboardArrowRightIcon sx={{ pb: '2px' }} />}
							onClick={nextStep}
						>
							Next
						</Button>
					</Box>
					<Typography variant='body2'>
						* You can update all this information in your profile at any time
					</Typography>
				</Container>
			</Stack>
		</Card>
	);
};

export default LifestyleInformation;

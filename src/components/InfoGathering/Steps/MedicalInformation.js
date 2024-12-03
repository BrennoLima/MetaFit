import React from 'react';
import {
	Box,
	Button,
	Card,
	Container,
	Stack,
	Grid2,
	LinearProgress,
	Typography,
	TextField,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MedicalInformation = ({
	userInfo,
	updateUserInfo,
	nextStep,
	prevStep,
}) => {
	const conditionsList = [
		'Diabetes',
		'Hypertension',
		'Heart Disease',
		'Kidney Disease',
		'Liver Disease',
		'Celiac Disease',
		'Irritable Bowel Syndrome',
		'Thyroid Disorders',
		'Metabolic Syndrome',
		'Anemia',
		'Pregnancy',
		'Other',
	];

	const toggleItem = (list, item) => {
		if (list.includes(item)) {
			console.log(list.filter((i) => item !== i));
			return list.filter((listItem) => listItem !== item);
		} else {
			return [...list, item];
		}
	};

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
					sx={{ width: 1, display: 'flex', justifyContent: 'center', pb: 2 }}
				>
					<Box sx={{ width: '50%', color: '#1a3456' }}>
						<LinearProgress
							color='inherit'
							variant='determinate'
							value={(100 / 6) * 5}
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
							We are almost done!
						</Typography>
						<Typography sx={{ mt: 1 }}>
							Share any medical conditions or concerns you may have so we can
							design a plan that's not only effective but also safe and aligned
							with your unique health needs. Your well-being is our priority,
							and understanding your health allows us to provide the best
							guidance for your journey.
						</Typography>
					</Box>
				</Box>
				<Container
					maxWidth='sm'
					sx={{
						px: '0 !important',
						flex: 1,
						pb: userInfo.medicalConditions.includes('Other') ? 0 : 4,
					}}
				>
					<Stack sx={{ height: 1, justifyContent: 'space-around' }}>
						<Box sx={{ mb: 2 }}>
							<Typography variant='body2' fontWeight='semi-bold' sx={{ mb: 2 }}>
								Select any medical condition that applies or simple skip
							</Typography>
							<Grid2 container gap={2}>
								{conditionsList.map((item) => (
									<Button
										variant='contained'
										key={'medicalCondition' + item}
										sx={{
											fontWeight: 'normal',
											borderRadius: 10,
											px: 4,
											border: userInfo.medicalConditions.includes(item)
												? '1px solid #FFF'
												: '1px solid #2D507C',
											backgroundColor: '#2D507C',
										}}
										onClick={() =>
											updateUserInfo(
												'medicalConditions',
												toggleItem(userInfo.medicalConditions, item)
											)
										}
									>
										{item}
									</Button>
								))}
							</Grid2>
							{userInfo.medicalConditions.includes('Other') && (
								<TextField
									fullWidth
									placeholder='Specify in a few words (other)'
									value={userInfo.medicalConditionsOther}
									onChange={(e) =>
										updateUserInfo('medicalConditionsOther', e.target.value)
									}
									size='small'
									sx={{ background: '#FFF', borderRadius: 1, mt: 2 }}
								/>
							)}
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
							startIcon={<KeyboardArrowLeftIcon />}
						>
							Back
						</Button>
						<Button
							variant='contained'
							color='secondary'
							sx={{ px: 4 }}
							endIcon={<KeyboardArrowRightIcon />}
							onClick={nextStep}
						>
							Generate Plan
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

export default MedicalInformation;

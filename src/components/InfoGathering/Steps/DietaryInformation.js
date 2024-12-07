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

const DietaryInformation = ({
	userInfo,
	updateUserInfo,
	nextStep,
	prevStep,
}) => {
	const allergiesList = [
		'Peanuts',
		'Milk',
		'Eggs',
		'Wheat',
		'Soy',
		'Fish',
		'Shellfish',
		'Sesame',
		'Other',
	];
	const dietPreferencesList = [
		'Vegetarian',
		'Vegan',
		'Dairy-free',
		'Gluten-free',
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
							Any dietary preferences or restrictions?
						</Typography>
						<Typography sx={{ mt: 1 }}>
							Let us know your preferences or restrictions to ensure your plan
							suits your taste and meets your needs. If no preferences, just
							skip to next page.
						</Typography>
					</Box>
				</Box>
				<Container
					maxWidth='sm'
					sx={{
						px: '0 !important',
						flex: 1,
						pb:
							userInfo.allergies.includes('Other') ||
							userInfo.dietPreferences.includes('Other')
								? 0
								: 4,
					}}
				>
					<Stack sx={{ height: 1, justifyContent: 'space-around' }}>
						<Box sx={{ mb: 2 }}>
							<Typography variant='body2' fontWeight='semi-bold' sx={{ mb: 2 }}>
								Allergies or intolerance? Select bellow
							</Typography>
							<Grid2 container gap={1}>
								{allergiesList.map((item) => (
									<Button
										variant='contained'
										key={'allergy' + item}
										sx={{
											fontWeight: 'normal',
											borderRadius: 10,
											px: 4,
											border: userInfo.allergies.includes(item)
												? '1px solid #FFF'
												: '1px solid #2D507C',
											backgroundColor: '#2D507C',
										}}
										onClick={() =>
											updateUserInfo(
												'allergies',
												toggleItem(userInfo.allergies, item)
											)
										}
									>
										{item}
									</Button>
								))}
							</Grid2>
							{userInfo.allergies.includes('Other') && (
								<TextField
									fullWidth
									placeholder='Specify in a few words (other)'
									value={userInfo.allergiesOther}
									onChange={(e) =>
										updateUserInfo('allergiesOther', e.target.value)
									}
									size='small'
									sx={{ background: '#FFF', borderRadius: 1, mt: 2 }}
								/>
							)}
						</Box>
						<Box>
							<Typography variant='body2' fontWeight='semi-bold' sx={{ mb: 2 }}>
								Diet preferences?
							</Typography>
							<Grid2 container gap={1}>
								{dietPreferencesList.map((item) => (
									<Button
										key={'preference' + item}
										variant='contained'
										sx={{
											fontWeight: 'normal',
											borderRadius: 10,
											px: 4,
											border: userInfo.dietPreferences.includes(item)
												? '1px solid #FFF'
												: '1px solid #2D507C',
											backgroundColor: '#2D507C',
										}}
										onClick={() =>
											updateUserInfo(
												'dietPreferences',
												toggleItem(userInfo.dietPreferences, item)
											)
										}
									>
										{item}
									</Button>
								))}
							</Grid2>
							{userInfo.dietPreferences.includes('Other') && (
								<TextField
									fullWidth
									placeholder='Specify in a few words (other)'
									value={userInfo.dietPreferencesOther}
									onChange={(e) =>
										updateUserInfo('dietPreferencesOther', e.target.value)
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
							{userInfo.allergies.length === 0 &&
							userInfo.dietPreferences.length === 0
								? 'Skip'
								: 'Next'}
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

export default DietaryInformation;

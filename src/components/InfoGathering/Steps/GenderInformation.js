import React from 'react';
import {
	Box,
	Button,
	Card,
	Container,
	Stack,
	LinearProgress,
	Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

const GenderInformation = ({ userInfo, updateUserInfo, nextStep }) => {
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
							value={(100 / 6) * 1}
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
							Welcome to the MetaFit App!
						</Typography>
						<Typography sx={{ mt: 1 }}>
							We're happy that you chose us to support you on this exciting
							journey! To get started, we'll gather some key details about you
							and your goals. This information will help us create a
							personalized plan tailored to your lifestyle and unique needs.
						</Typography>
						<Typography sx={{ mt: 1 }}>
							The first important information is you gender
						</Typography>
					</Box>
				</Box>
				<Container maxWidth='sm' sx={{ px: '0 !important', flex: 1 }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: 1,
						}}
					>
						<Button
							variant='contained'
							startIcon={<ManIcon />}
							sx={{
								border:
									userInfo.gender === 'male'
										? '1px solid #FFF'
										: '1px solid #2D507C',
								backgroundColor: '#2D507C',
								fontSize: 20,
								pr: 6,
								pl: 1,
								py: 4,
								'& .MuiSvgIcon-root': {
									fontSize: '100px !important',
								},
							}}
							onClick={() => updateUserInfo('gender', 'male')}
						>
							Male
						</Button>
						<Button
							variant='contained'
							startIcon={<WomanIcon />}
							sx={{
								border:
									userInfo.gender === 'female'
										? '1px solid #FFF'
										: '1px solid #2D507C',
								backgroundColor: '#2D507C',
								fontSize: 20,
								pr: 4,
								pl: 1,
								py: 4,
								'& .MuiSvgIcon-root': {
									fontSize: '100px !important',
								},
							}}
							onClick={() => updateUserInfo('gender', 'female')}
						>
							Female
						</Button>
					</Box>
				</Container>
				<Container maxWidth='sm' sx={{ px: '0 !important' }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							py: 2,
						}}
					>
						<Button
							disabled={userInfo.gender === null}
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

export default GenderInformation;

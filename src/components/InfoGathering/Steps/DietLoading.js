import React from 'react';
import { Card, Stack, Box, LinearProgress } from '@mui/material';

const DietLoading = ({ userInfo, updateUserInfo, nextStep, prevStep }) => {
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
							value={100}
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
			</Stack>
		</Card>
	);
};

export default DietLoading;

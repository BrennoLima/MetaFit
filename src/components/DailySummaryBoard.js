import React from 'react';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { Box, LinearProgress, Typography } from '@mui/material';

import { CARBS_COLOR, FATS_COLOR, PROTEINS_COLOR } from '../utils/constants';

const DailySummaryBoard = ({ summary, consumedMacros }) => {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 1,
					mt: 8,
					pb: 4,
				}}
			>
				<TrackChangesOutlinedIcon sx={{ width: '48px', height: '48px' }} />
				<Box>
					<Typography
						fontWeight='medium'
						fontSize={14}
						lineHeight={1}
						sx={{ opacity: 0.5 }}
					>
						GOAL
					</Typography>
					<Typography fontSize={24} lineHeight={1}>
						Muscle Gain
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					pb: 4,
				}}
			>
				<Typography textAlign='center' fontWeight='bold' fontSize={32}>
					{summary?.calories}
				</Typography>
				<Typography color='text.secondary' textAlign='center' fontSize={16}>
					Daily Calories
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: 1,
					mb: 8,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						width: '75%',
						gap: 4,
					}}
				>
					<Box sx={{ width: 1, textAlign: 'center' }}>
						<Typography fontSize={18} fontWeight='medium'>
							Carbs
						</Typography>
						<Box sx={{ py: 1, color: CARBS_COLOR }}>
							<LinearProgress
								variant='determinate'
								color='inherit'
								value={(consumedMacros?.carbs / summary?.carbs) * 100}
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
						<Typography color='text.secondary' variant='body2'>
							<mark
								style={{
									background: 'none',
									fontSize: '16px',
									fontWeight: 'bold',
								}}
							>
								{consumedMacros?.carbs}
							</mark>{' '}
							/{summary?.carbs}g
						</Typography>
					</Box>
					<Box sx={{ width: 1, textAlign: 'center' }}>
						<Typography fontSize={18} fontWeight='medium'>
							Proteins
						</Typography>
						<Box sx={{ py: 1, color: PROTEINS_COLOR }}>
							<LinearProgress
								variant='determinate'
								color='inherit'
								value={(consumedMacros?.proteins / summary?.proteins) * 100}
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
						<Typography color='text.secondary' variant='body2'>
							<mark
								style={{
									background: 'none',
									fontSize: '16px',
									fontWeight: 'bold',
								}}
							>
								{consumedMacros?.proteins}
							</mark>{' '}
							/{summary?.proteins}g
						</Typography>
					</Box>
					<Box sx={{ width: 1, textAlign: 'center' }}>
						<Typography fontSize={18} fontWeight='medium'>
							Fats
						</Typography>
						<Box sx={{ py: 1, color: FATS_COLOR }}>
							<LinearProgress
								variant='determinate'
								color='inherit'
								value={(consumedMacros?.fats / summary?.fats) * 100}
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
						<Typography color='text.secondary' variant='body2'>
							<mark
								style={{
									background: 'none',
									fontSize: '16px',
									fontWeight: 'bold',
								}}
							>
								{consumedMacros?.fats}
							</mark>{' '}
							/{summary?.fats}g
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default DailySummaryBoard;

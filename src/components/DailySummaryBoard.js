import React from 'react';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import {
	Box,
	Card,
	CircularProgress,
	LinearProgress,
	Typography,
} from '@mui/material';

import {
	CALORIES_COLOR,
	CARBS_COLOR,
	FATS_COLOR,
	PROTEINS_COLOR,
} from '../utils/constants';

const DailySummaryBoard = ({ summary, consumedMacros }) => {
	return (
		<Card
			sx={{
				color: 'white',
				background: 'linear-gradient(180deg, #4f7db7, #2d507c)',
				mb: 4,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 1,
					my: 4,
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
			<Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<CircularProgress
						size={200}
						thickness={2}
						variant='determinate'
						value={
							(consumedMacros?.calories / summary?.calories) * 100 - 40 || 0
						}
						sx={{
							transform: 'rotate(160deg) !important',
							position: 'absolute',
							zIndex: 1,
							color: CALORIES_COLOR,
						}}
					/>
					<CircularProgress
						size={200}
						thickness={2}
						variant='determinate'
						value={60}
						sx={{
							color: '#DDDDDD80',
							transform: 'rotate(160deg) !important',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						mt: '-130px',
						pb: 0.5,
					}}
				>
					<Typography fontSize={22} fontWeight='bold'>
						{consumedMacros?.calories}
					</Typography>
					<Typography fontSize={16} sx={{ ml: 0.5, mt: '2px', opacity: 0.5 }}>
						/{summary?.calories}
					</Typography>
				</Box>
				<Typography fontWeight='medium' fontSize={14} align='center'>
					Daily Calories
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: 1,
					my: 4,
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
								aria-label='CarbsProgress'
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
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography fontWeight='bold'>
								{consumedMacros?.carbs}g
							</Typography>
							<Typography
								variant='body2'
								sx={{ ml: 0.5, mt: '2px', opacity: 0.5 }}
							>
								/{summary?.carbs}g
							</Typography>
						</Box>
					</Box>
					<Box sx={{ width: 1, textAlign: 'center' }}>
						<Typography fontSize={18} fontWeight='medium'>
							Proteins
						</Typography>
						<Box sx={{ py: 1, color: PROTEINS_COLOR }}>
							<LinearProgress
								aria-label='ProteinsProgress'
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
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography fontWeight='bold'>
								{consumedMacros?.proteins}g
							</Typography>
							<Typography
								variant='body2'
								sx={{ ml: 0.5, mt: '2px', opacity: 0.5 }}
							>
								/{summary?.proteins}g
							</Typography>
						</Box>
					</Box>
					<Box sx={{ width: 1, textAlign: 'center' }}>
						<Typography fontSize={18} fontWeight='medium'>
							Fats
						</Typography>
						<Box sx={{ py: 1, color: FATS_COLOR }}>
							<LinearProgress
								aria-label='FatsProgress'
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
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography fontWeight='bold'>{consumedMacros?.fats}g</Typography>
							<Typography
								variant='body2'
								sx={{ ml: 0.5, mt: '2px', opacity: 0.5 }}
							>
								/{summary?.fats}g
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export default DailySummaryBoard;

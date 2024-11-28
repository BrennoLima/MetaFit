import React from 'react';
import { Box, Card, CircularProgress, Stack, Typography } from '@mui/material';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { v4 as uuidv4 } from 'uuid';

import { getImageName } from '../utils/getImageName';
import { CARBS_COLOR, FATS_COLOR, PROTEINS_COLOR } from '../utils/constants';

const MealCard = ({ summary, meal }) => {
	return (
		<Card
			elevation={0}
			sx={{ background: '#FFF', p: 2, border: '1px solid #DDD' }}
		>
			<Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>
				<RestaurantOutlinedIcon fontSize='medium' sx={{ color: '#00000060' }} />
				<Typography fontWeight='medium' lineHeight={1} fontSize={18}>
					{meal.name}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					fontWeight='400'
					lineHeight={1}
				>
					•
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					fontWeight='400'
					lineHeight={1}
				>
					{meal.calories}
					cal
				</Typography>
			</Box>
			<Stack gap={1} sx={{ justifyContent: 'flex-start', my: 2 }}>
				{meal.content.map((mealItem) => (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
						key={uuidv4()}
					>
						<img
							src={`assets/images/foods/${getImageName(mealItem.name)}.jpg`}
							alt={mealItem.name}
							style={{
								width: '100px',
								height: '75px',
								objectFit: 'cover',
								borderRadius: '4px',
							}}
						/>
						<Box sx={{ pl: 2 }}>
							<Typography variant='body2' fontWeight='medium'>
								{mealItem.name}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{mealItem.quantity}
							</Typography>
						</Box>
					</Box>
				))}
			</Stack>
			<Box
				gap={2}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					mt: 2,
					pt: 2,
					borderTop: '1px solid #DDD',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							color: CARBS_COLOR,
							boxShadow: 'inset 0px 0px 0px 2px #DDD',
							borderRadius: '50%',
							width: '24px',
							height: '24px',
						}}
					>
						<CircularProgress
							size={24}
							variant='determinate'
							color='inherit'
							value={(meal?.carbs / summary?.carbs) * 100}
						/>
					</Box>
					<Typography color='text.secondary' variant='body2'>
						<b>{meal.carbs}g</b> carbs
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							color: PROTEINS_COLOR,
							boxShadow: 'inset 0px 0px 0px 2px #DDD',
							borderRadius: '50%',
							width: '24px',
							height: '24px',
						}}
					>
						<CircularProgress
							size={24}
							variant='determinate'
							color='inherit'
							value={(meal?.proteins / summary?.proteins) * 100}
						/>
					</Box>
					<Typography color='text.secondary' variant='body2'>
						<b>{meal.proteins}g</b> protein
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							color: FATS_COLOR,
							boxShadow: 'inset 0px 0px 0px 2px #DDD',
							borderRadius: '50%',
							width: '24px',
							height: '24px',
						}}
					>
						<CircularProgress
							size={24}
							variant='determinate'
							color='inherit'
							value={(meal?.fats / summary?.fats) * 100}
						/>
					</Box>
					<Typography color='text.secondary' variant='body2'>
						<b>{meal.fats}g</b> fats
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default MealCard;

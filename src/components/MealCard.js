import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { getImageName } from '../utils/getImageName';

// interface mealCardProps {
// 	calories: string;
// 	carbs: string;
// 	content: { name: string; quantity: string }[];
// 	name: string;
// 	protein: string;
// 	fats: string;
// 	time: string;
// }

const MealCard = ({ meal }) => {
	console.log(meal);
	return (
		<Card sx={{ p: 2 }}>
			<Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>
				<RestaurantOutlinedIcon fontSize='medium' />
				<Typography fontWeight='600'>{meal.name}</Typography>
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
			<Stack gap={2} sx={{ justifyContent: 'flex-start', my: 2 }}>
				{meal.content.map((mealItem) => (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
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
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							background: '#FF0000',
						}}
					/>
					<Typography variant='body2'>{meal.carbs} carbs</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							background: '#000DFF',
						}}
					/>
					<Typography variant='body2'>{meal.protein} protein</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Box
						sx={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							background: '#FFC300',
						}}
					/>
					<Typography variant='body2'>{meal.fats} fats</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default MealCard;

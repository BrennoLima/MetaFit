const CARBS_COLOR = '#FF0000';
const PROTEINS_COLOR = '#15be1b';
const FATS_COLOR = '#FFC300';
const CALORIES_COLOR = '#0093ff';

const HARDCODED_DIET = {
  dailySummary: {
    calories: 2500,
    proteins: 180,
    carbs: 250,
    fats: 90,
  },
  meals: [
    {
      name: 'Pre-Workout Meal',
      time: '5:45 AM',
      content: [
        { name: 'Oatmeal', quantity: '50g' },
        { name: 'Banana', quantity: '1 medium' },
        { name: 'Whey Protein Shake', quantity: '1 scoop' },
      ],
      calories: 400,
      proteins: 30,
      carbs: 60,
      fats: 10,
      completed: false,
    },
    {
      name: 'Post-Workout Breakfast',
      time: '8:00 AM',
      content: [
        { name: 'Scrambled Eggs', quantity: '3 large' },
        { name: 'Whole Grain Toast', quantity: '2 slices' },
        { name: 'Avocado', quantity: '50g' },
      ],
      calories: 500,
      proteins: 30,
      carbs: 40,
      fats: 25,
      completed: false,
    },
    {
      name: 'Mid-Morning Snack',
      time: '10:30 AM',
      content: [
        { name: 'Greek Yogurt', quantity: '200g' },
        { name: 'Mixed Berries', quantity: '100g' },
      ],
      calories: 250,
      proteins: 20,
      carbs: 30,
      fats: 5,
      completed: false,
    },
    {
      name: 'Lunch',
      time: '1:00 PM',
      content: [
        { name: 'Grilled Chicken Breast', quantity: '150g' },
        { name: 'Quinoa', quantity: '100g' },
        { name: 'Steamed Broccoli', quantity: '100g' },
      ],
      calories: 600,
      proteins: 50,
      carbs: 60,
      fats: 15,
      completed: false,
    },
    {
      name: 'Afternoon Snack',
      time: '4:00 PM',
      content: [
        { name: 'Hummus', quantity: '100g' },
        { name: 'Carrot Sticks', quantity: '100g' },
      ],
      calories: 200,
      proteins: 5,
      carbs: 30,
      fats: 10,
      completed: false,
    },
    {
      name: 'Dinner',
      time: '7:00 PM',
      content: [
        { name: 'Baked Salmon', quantity: '150g' },
        { name: 'Sweet Potato', quantity: '200g' },
        { name: 'Mixed Salad', quantity: '150g' },
      ],
      calories: 550,
      proteins: 45,
      carbs: 30,
      fats: 25,
      completed: false,
    },
  ],
};

export {
  CALORIES_COLOR,
  CARBS_COLOR,
  PROTEINS_COLOR,
  FATS_COLOR,
  HARDCODED_DIET,
};

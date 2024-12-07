// This function receives a time in HH:MM AM/PM format and returns a timestamp string for that time in the current day

export const getTimestamp = (time) => {
	let today = new Date();
	let hours = parseInt(time.split(':')[0]);
	let minutes = parseInt(time.split(' ')[0].split(':')[1]);
	if (time.includes('PM') && hours !== 12) hours += 12;
	return today.setHours(hours, minutes, 0);
};

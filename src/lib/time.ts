const SECOND_MILLIS = 1000.0;
const MINUTE_MILLIS = 60.0 * SECOND_MILLIS;
const HOUR_MILLIS = 60.0 * MINUTE_MILLIS;

export function getTimeDisplay(time: number) {
	if (!time) return '0:00:00';

	let remaining = time;

	const hours = Math.floor(remaining / HOUR_MILLIS);
	remaining -= hours * HOUR_MILLIS;
	const minutes = Math.floor(remaining / MINUTE_MILLIS);
	remaining -= minutes * MINUTE_MILLIS;
	const seconds = Math.round(remaining / SECOND_MILLIS);

	return `${hours}:${('' + minutes).padStart(2, '0')}:${('' + seconds).padStart(2, '0')}`;
}

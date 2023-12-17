const SECOND_MILLIS = 1000.0;
const MINUTE_MILLIS = 60.0 * SECOND_MILLIS;
const HOUR_MILLIS = 60.0 * MINUTE_MILLIS;

const pad = (n: number) => ('' + n).padStart(2, '0');

export function getTimeDisplay(time: number) {
	if (!time) return '0:00:00';

	let prefix = time < 0 ? '-' : '';

	let remaining = Math.abs(time);

	const hours = Math.floor(remaining / HOUR_MILLIS);
	remaining -= hours * HOUR_MILLIS;
	const minutes = Math.floor(remaining / MINUTE_MILLIS);
	remaining -= minutes * MINUTE_MILLIS;
	const seconds = Math.round(remaining / SECOND_MILLIS);

	return `${prefix}${hours}:${pad(minutes)}:${pad(seconds)}`;
}

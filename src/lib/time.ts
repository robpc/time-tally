const SECOND_MILLIS = 1000.0;
const MINUTE_MILLIS = 60.0 * SECOND_MILLIS;
const HOUR_MILLIS = 60.0 * MINUTE_MILLIS;

export function getTimeDisplay(start: Date | undefined, stop: Date = new Date()) {
	if (!start) return '0:00:00';

	let remaining = stop.getTime() - start.getTime();

	const hours = Math.floor(remaining / HOUR_MILLIS);
	remaining -= hours * HOUR_MILLIS;
	const minutes = Math.floor(remaining / MINUTE_MILLIS);
	remaining -= minutes * MINUTE_MILLIS;
	const seconds = Math.floor(remaining / SECOND_MILLIS);

	return `${hours}:${('' + minutes).padStart(2, '0')}:${('' + seconds).padStart(2, '0')}`;
}

<script lang="ts">
	import dayjs from 'dayjs';
	import localizedFormatPlugin from 'dayjs/plugin/localizedFormat';
	import isTodayPlugin from 'dayjs/plugin/isToday';

	export var start: string;
	export var stop: string;

	dayjs.extend(localizedFormatPlugin);
	dayjs.extend(isTodayPlugin);

	// 10:23pm - 11:34pm
	// 5/20 10:23pm - 11:14pm
	// 5/20/2022 10:23pm - 11:14pm
	// 05/19 10:23pm - 5/20 1:00am
	// 12/30/2022 10:34pm - 1/1/2023 1:00am

	const toMonthDayYear = (d: string) => dayjs(d).format('M/DD/YYYY');
	const toMonthDay = (d: string) => dayjs(d).format('M/DD');

	const toTime = (d: string) => dayjs(d).format('h:mma');

	// Only need to test start date
	$: isToday = dayjs(start).isToday();
	$: isThisYear = dayjs(start).year() == dayjs().year();
	$: isSameDate = toMonthDayYear(start) == toMonthDayYear(stop);

	$: startDate = isThisYear ? toMonthDay(start) : toMonthDayYear(start);
	$: stopDate = isThisYear ? toMonthDay(stop) : toMonthDayYear(stop);
</script>

<div class="flex flex-row gap-1">
	{#if !isToday}<div>{startDate}</div>{/if}
	<div>{toTime(start)}</div>
	<div>-</div>
	{#if !isToday && !isSameDate}<div>{stopDate}</div>{/if}
	<div>{toTime(stop)}</div>
</div>

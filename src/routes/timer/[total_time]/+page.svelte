<script lang="ts">
	// necessary to get the type definitions for the page data
	import type { PageData } from './$types';
	export let data: PageData;

	// the time remaining in seconds; from the URL
	let timeRemaining: number = parseInt(data.totalTime);

	// wait one second before starting the timer
	setTimeout(decrementTimeRemaining, 1000);

	// decrement the time remaining every second
	function decrementTimeRemaining() {
		timeRemaining--;
		if (timeRemaining > 0) {
			setTimeout(decrementTimeRemaining, 1000);
		}
	}

	// format the time remaining as minutes and seconds
    function formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }
</script>

<h1>{formatTime(timeRemaining)}</h1>

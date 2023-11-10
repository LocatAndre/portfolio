<script lang="ts">
	import { onMount } from 'svelte'

	let sentence = ''
	const contents = [' web devel', ' mobile dev', ' web/mobile developer']
	let letterIndex = 0
	let contentIndex = 0
	let interval: number

	function tpyeText() {
		if (letterIndex < contents[contentIndex].length) {
			sentence += contents[contentIndex][letterIndex]
			letterIndex++
		} else {
			clearInterval(interval)
			if (contentIndex !== contents.length - 1) {
				setTimeout(() => (interval = setInterval(deleteText, 100)), 750)
			}
		}
	}

	function deleteText() {
		if (letterIndex > 0) {
			sentence = sentence.slice(0, letterIndex - 1)
			letterIndex--
		} else {
			clearInterval(interval)
			if (contentIndex !== contents.length) {
				contentIndex++
				setTimeout(() => (interval = setInterval(tpyeText, 100)), 750)
			} else {
				clearInterval(interval)
			}
		}
	}

	onMount(() => {
		interval = setInterval(tpyeText, 100)
		return () => clearInterval(interval)
	})
</script>

<h1
	class="inline-block h-52 w-full align-middle text-4xl font-light leading-relaxed sm:h-fit sm:w-fit"
>
	I'm a<br class="block sm:hidden" />{sentence}<span class="cursor inline-block">▍</span>
</h1>

<style>
	.cursor {
		animation: blink 0.75s step-end infinite;
	}
	@keyframes blink {
		from,
		to {
			color: transparent;
		}
		50% {
			color: #ff6511;
		}
	}
</style>

<script lang="ts">
	import { quintOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'

	let toggle = false
	let innerWidth: number

	function handleMenuLayout(event: UIEvent) {
		innerWidth = (event?.target as Window)?.innerWidth
		if (innerWidth > 640 && toggle) toggle = false
	}
</script>

<svelte:window bind:innerWidth on:resize={handleMenuLayout} />

<div class="flex basis-2/3 flex-row-reverse pr-7 sm:hidden">
	<button class="z-10" on:click={() => (toggle = !toggle)}>
		{#if toggle}
			<svg
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 stroke-white"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{:else}
			<svg
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 rotate-180 stroke-apricot-700"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
				/>
			</svg>
		{/if}
	</button>
</div>

{#if toggle || innerWidth > 800}
	<div
		transition:slide={{ duration: 800, easing: quintOut, axis: 'y' }}
		class={`${
			toggle ? 'fixed' : 'hidden'
		} top-0 h-screen bg-dark_slate_gray-900/75 text-lg text-white sm:flex sm:h-fit sm:bg-transparent sm:pr-7`}
	>
		<ul
			class={`flex w-screen flex-col gap-6 rounded-b-2xl bg-dark_slate_gray-800 pb-8 pt-16 sm:w-fit sm:flex-row sm:bg-transparent sm:py-0`}
		>
			<li class="w-full text-center sm:w-fit sm:bg-transparent">
				<a
					class="decoration-apricot-700 decoration-wavy decoration-2 underline-offset-4 hover:underline"
					href="/">Home</a
				>
			</li>
			<li class="w-full text-center sm:w-fit sm:bg-transparent">
				<a
					class="decoration-apricot-700 decoration-wavy decoration-2 underline-offset-4 hover:underline"
					href="/about">About</a
				>
			</li>
			<li class="w-full text-center sm:w-fit sm:bg-transparent">
				<a
					class="decoration-apricot-700 decoration-wavy decoration-2 underline-offset-4 hover:underline"
					href="/blog">Blog</a
				>
			</li>
			<li class="w-full text-center sm:w-fit sm:bg-transparent">
				<a
					class="decoration-apricot-700 decoration-wavy decoration-2 underline-offset-4 hover:underline"
					href="/contact">Contact Me</a
				>
			</li>
		</ul>
	</div>
{/if}

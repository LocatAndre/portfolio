<script lang="ts">
	import { quintOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'

	export let toggle: Boolean
	export let toggleCallback: () => void
</script>

<div class="flex basis-2/3 flex-row-reverse sm:hidden">
	<div class="z-10 px-8">
		<button on:click={toggleCallback}>
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
</div>

<script lang="ts">
	export let toggle: boolean
	export let label: string
	export let callback: () => void
</script>

<button
	on:click={callback}
	class={`text-left text-xl ${
		toggle
			? 'decoration font-semibold underline decoration-apricot-600 decoration-wavy underline-offset-4'
			: 'font-normal text-stone-600'
	} `}
	aria-label={label}>{label}</button
>

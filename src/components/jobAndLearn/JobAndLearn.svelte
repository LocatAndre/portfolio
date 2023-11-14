<script lang="ts">
	import TabButton from './TabButton.svelte'

	export let work: { label: string; img: string }[]
	export let learn: { label: string; img: string }[]

	let toggle = true
</script>

<div class="flex flex-col items-center gap-8 sm:h-[420px] sm:w-1/2">
	<div class="flex gap-8 self-start">
		<TabButton label="Preferred Technologies" {toggle} callback={() => (toggle = true)} />
		<TabButton label="Currently Learning" toggle={!toggle} callback={() => (toggle = false)} />
	</div>
	<ul class="grid w-full grid-cols-2 gap-4">
		{#if toggle}
			{#each work as ele}
				<li class="flex items-center gap-3">
					<img class="aspect-square h-6 sm:h-8" src={ele.img} alt={''} />
					<p class="line-clamp-1 text-ellipsis text-sm sm:text-base">{ele.label}</p>
				</li>
			{/each}
		{:else}
			{#each learn as ele}
				<li class="flex items-center gap-3">
					<img class="aspect-square h-6 sm:h-8" src={ele.img} alt={''} />
					<p class="line-clamp-1 text-ellipsis text-sm sm:text-base">{ele.label}</p>
				</li>
			{/each}
		{/if}
	</ul>
</div>

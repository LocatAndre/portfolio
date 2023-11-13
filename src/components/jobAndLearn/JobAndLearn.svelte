<script lang="ts">
	export let work: { label: string; img: string }[]
	export let learn: { label: string; img: string }[]

	let toggle = true
</script>

<div class="flex flex-col items-start justify-start gap-8 sm:h-[420px] sm:w-1/2">
	<div class="flex w-full justify-between">
		<button
			on:click={() => (toggle = !toggle)}
			class={`text-xl ${
				toggle
					? 'decoration font-semibold underline decoration-apricot-600 decoration-wavy underline-offset-8'
					: 'font-normal text-stone-500'
			} `}
			aria-label="Go to learning">Preferred Technologies</button
		>
		<button
			on:click={() => (toggle = !toggle)}
			class={`text-xl ${
				!toggle
					? 'decoration font-semibold underline decoration-apricot-600 decoration-wavy underline-offset-8'
					: 'font-normal text-stone-500'
			} `}
			aria-label="Go to working">Learning</button
		>
	</div>
	{#if toggle}
		<ul class="grid grid-cols-2 gap-5">
			{#each work as ele}
				<li class="flex items-center gap-3">
					<img class="aspect-square h-6 sm:h-8" src={ele.img} alt={''} />
					<p class="line-clamp-1 text-ellipsis text-sm sm:text-base">{ele.label}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<ul class="grid grid-cols-2 gap-5">
			{#each learn as ele}
				<li class="flex items-center gap-3">
					<img class="aspect-square h-6 sm:h-8" src={ele.img} alt={''} />
					<p class="line-clamp-1 text-ellipsis text-sm sm:text-base">{ele.label}</p>
				</li>
			{/each}
		</ul>
	{/if}
</div>

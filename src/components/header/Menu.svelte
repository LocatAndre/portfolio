<script lang="ts">
	import { onMount } from 'svelte'
	import { quintOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'
	import MenuButton from './MenuButton.svelte'

	const menu = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/contact', label: 'Contact Me' }
	]

	let toggle = false
	let innerWidth: number
	let currentPath: string

	function handleMenuLayout(event: UIEvent) {
		innerWidth = (event?.target as Window)?.innerWidth
		if (innerWidth > 640 && toggle) toggle = false
	}

	function toggleCallback() {
		toggle = !toggle
	}

	onMount(() => {
		currentPath = window.location.href.replace(/(.+\w\/)(.+)/, '/$2')
	})
</script>

<svelte:window bind:innerWidth on:resize={handleMenuLayout} />

<MenuButton {toggle} {toggleCallback} />

{#if toggle || innerWidth > 640}
	<div
		transition:slide={{ duration: innerWidth < 640 ? 640 : 0, easing: quintOut, axis: 'y' }}
		class={`${
			toggle ? 'fixed' : 'hidden'
		} top-0 h-screen bg-dark_slate_gray-900/75 text-lg text-apricot-200 sm:flex sm:h-fit sm:bg-transparent`}
	>
		<ul
			class={`flex w-screen flex-col gap-6 rounded-b-xl bg-dark_slate_gray-800 pb-8 pt-16 sm:w-fit sm:flex-row sm:bg-transparent sm:py-0`}
		>
			{#each menu as item}
				<li class="w-full text-center sm:w-fit sm:bg-transparent">
					<a
						class={`${
							currentPath === item.path ? 'underline' : null
						} decoration-apricot-700 decoration-wavy decoration-2 underline-offset-4 hover:underline`}
						href={item.path}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}

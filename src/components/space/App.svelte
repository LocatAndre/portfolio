<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './Scene.svelte'
</script>

<div class="absolute top-0 -z-10 h-full w-full">
	<Canvas>
		<Scene />
	</Canvas>
</div>

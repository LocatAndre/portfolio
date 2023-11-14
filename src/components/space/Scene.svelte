<script lang="ts">
	import { T } from '@threlte/core'
	import Space from './Space.svelte'
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={65}>
	<!-- <OrbitControls enableZoom={true} enableDamping /> -->
</T.PerspectiveCamera>

<Space />

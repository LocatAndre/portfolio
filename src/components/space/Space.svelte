<script lang="ts">
	import { T, useFrame, useTask } from '@threlte/core'
	import { BufferAttribute, BufferGeometry, PointsMaterial } from 'three'

	const particlesGeometry = new BufferGeometry()
	const particlesCount = 15000

	const positionArray = new Float32Array(particlesCount * 3)

	for (let i = 0; i < particlesCount * 3; i++) {
		positionArray[i] = (Math.random() - 0.5) * 8
	}

	const material = new PointsMaterial({
		size: 0.005,
		depthWrite: false
	})

	let rotation = { x: 0, y: 0 }
	useTask((delta) => {
		rotation.y += Math.PI * 0.0001
		rotation.x += Math.sin(delta) * Math.sin(Math.random() - 0.5) * 0.0001
	})
</script>

<T.Mesh rotation={[rotation.x, rotation.y, 0]}>
	<T.Points geometry={particlesGeometry} {material}>
		<T.BufferGeometry attributes={{ position: new BufferAttribute(positionArray, 3) }} />
	</T.Points>
</T.Mesh>

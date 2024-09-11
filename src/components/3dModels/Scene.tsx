import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { PerspectiveCamera as PerspectiveCameraType } from 'three'

import { Loader3d, Lights, Character, House } from './'

const Scene = () => {
	const controlRef = useRef<OrbitControlsType>(null)
	const cameraRef = useRef<PerspectiveCameraType>(null)

	return (
		<Canvas>
			<Suspense fallback={<Loader3d />}>
				<House />
				<Character />
				<Lights />
				<PerspectiveCamera
					ref={cameraRef}
					position={[10, 10, 10]}
					near={0.1}
					far={1000}
					fov={40}
					makeDefault
				/>
				<OrbitControls
					ref={controlRef}
					target={[0, 0, 0]}
					// minDistance={5}
					// maxDistance={22}
					// minPolarAngle={0}
					// maxPolarAngle={1.35}
					// minAzimuthAngle={1.1}
					// maxAzimuthAngle={2.08}
					// enableRotate={true}
					enablePan={false}
				/>
			</Suspense>
		</Canvas>
	)
}

export default Scene

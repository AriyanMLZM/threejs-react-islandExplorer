import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
// import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
// import { PerspectiveCamera as PerspectiveCameraType } from 'three'

import { Loader3d, Lights, Character, House } from './'

const Scene = () => {
	// const controlRef = useRef<OrbitControlsType>(null)
	// const cameraRef = useRef<PerspectiveCameraType>(null)

	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]

	return (
		<>
			<EcctrlJoystick />
			<Canvas>
				<Lights />
				<Physics timeStep="vary">
					<Suspense fallback={<Loader3d />}>
						<KeyboardControls map={keyboardMap}>
							<Ecctrl debug>
								<Character />
							</Ecctrl>
						</KeyboardControls>
						<House />
					</Suspense>
				</Physics>
			</Canvas>
		</>
	)
}

export default Scene

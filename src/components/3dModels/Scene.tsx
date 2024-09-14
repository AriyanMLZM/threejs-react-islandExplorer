import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { EcctrlJoystick } from 'ecctrl'

import { Loader3d, Lights, Character, Map, Controller } from './'
import { MeshBasicMaterial } from 'three'

const Scene = () => {
	return (
		<>
			<EcctrlJoystick
			// 	joystickBaseProps={{
			// 		receiveShadow: true,
			// 		material: new MeshBasicMaterial({
			// 			color: '#777',
			// 			opacity: 0.5,
			// 			transparent: true,
			// 		}),
			// 	}}
			// 	joystickStickProps={{
			// 		receiveShadow: true,
			// 		material: new MeshBasicMaterial({
			// 			color: '#777',
			// 			opacity: 0,
			// 			transparent: true,
			// 		}),
			// 	}}
			// 	joystickHandleProps={{
			// 		receiveShadow: true,
			// 		material: new MeshBasicMaterial({
			// 			color: '#222',
			// 			opacity: 0.7,
			// 			transparent: true,
			// 		}),
			// 	}}
			/>
			<Canvas>
				<Lights />
				<Physics timeStep="vary">
					<Suspense fallback={<Loader3d />}>
						<Controller>
							<Character />
						</Controller>
						<Map />
					</Suspense>
				</Physics>
			</Canvas>
		</>
	)
}

export default Scene

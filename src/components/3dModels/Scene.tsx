import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { EcctrlJoystick } from 'ecctrl'

import { Loader3d, Lights, Character, House, Controller } from './'

const Scene = () => {
	return (
		<>
			<EcctrlJoystick
			// joystickBaseProps={{
			// 	receiveShadow: true,
			// 	material: new MeshBasicMaterial({ color: '#777' }),
			// }}
			/>
			<Canvas>
				<Lights />
				<Physics timeStep="vary">
					<Suspense fallback={<Loader3d />}>
						<Controller>
							<Character />
						</Controller>
						<House />
					</Suspense>
				</Physics>
			</Canvas>
		</>
	)
}

export default Scene

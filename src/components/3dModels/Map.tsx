import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { inn as model } from '../../assets/models'

const Map = () => {
	const { nodes, materials } = useGLTF(model) as any

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			<group dispose={null}>
				<group rotation={[-Math.PI / 2, 0, 0]} scale={0.11}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.TheInn_bakeInn_0.geometry}
					>
						<meshStandardMaterial map={materials.bakeInn.map} />
					</mesh>
				</group>
			</group>
		</RigidBody>
	)
}

export default Map

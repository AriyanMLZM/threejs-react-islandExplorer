import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { houseModel } from '../../assets/models'

const House = () => {
	const { nodes, materials } = useGLTF(houseModel) as any

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			<group dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.floor.geometry}
					material={materials.floor}
					position={[0, -0.2, 0]}
					scale={[20, 0.1, 20]}
				/>
			</group>
		</RigidBody>
	)
}

export default House

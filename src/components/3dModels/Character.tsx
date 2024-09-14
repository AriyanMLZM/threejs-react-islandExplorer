import { useGLTF } from '@react-three/drei'
import { characterModel } from '../../assets/models'

const Character = () => {
	const { scene } = useGLTF(characterModel) as any

	return (
		<mesh rotation={[0, -2, 0]} position={[0, 0.02, 0]} scale={2}>
			<primitive object={scene} />
		</mesh>
	)
}

export default Character

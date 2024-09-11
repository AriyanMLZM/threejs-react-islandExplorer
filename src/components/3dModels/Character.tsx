import { useGLTF } from '@react-three/drei'
import { characterModel } from '../../assets/models'

const Character = () => {
	const { scene } = useGLTF(characterModel) as any

	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	)
}

export default Character

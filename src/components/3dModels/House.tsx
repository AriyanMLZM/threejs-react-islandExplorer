import { useGLTF } from '@react-three/drei'
import { houseModel } from '../../assets/models'

const House = () => {
	const { scene } = useGLTF(houseModel) as any

	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	)
}

export default House

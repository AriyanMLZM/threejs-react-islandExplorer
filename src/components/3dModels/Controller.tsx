import { KeyboardControls } from '@react-three/drei'
import Ecctrl from 'ecctrl'

const Controller = ({ children }: { children: React.ReactNode }) => {
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]

	return (
		<KeyboardControls map={keyboardMap}>
			<Ecctrl>{children}</Ecctrl>
		</KeyboardControls>
	)
}

export default Controller

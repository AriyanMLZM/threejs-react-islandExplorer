const Lights = () => {
	return (
		<>
			<ambientLight intensity={0.2} />

			<pointLight position={[0, 5, 0]} intensity={100} color="#fff" />

			<directionalLight position={[10, 10, 10]} intensity={1} color="#fff" />
			<directionalLight position={[-10, 10, 10]} intensity={1} color="#fff" />
		</>
	)
}

export default Lights

export default function Welcome({ color, color2 }) {
	return (
		<div
			className="welcome"
			style={{
				background: `linear-gradient(70deg, ${color} 10%, ${color2} 90%)`,
			}}
		>
			<h3 className="subtitle">Bienvenue sur mon portfolio</h3>
		</div>
	);
}

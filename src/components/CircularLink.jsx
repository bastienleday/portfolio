export default function CircularLink({ children, link, color }) {
	console.log(color);
	return (
		<a
			className="buttonCircularLink"
			href={link}
			target="blank"
			style={{
				":hover": { border: color, boxShadow: `1px 2px 27px 2px ${color}` },
			}}
		>
			{children}
		</a>
	);
}

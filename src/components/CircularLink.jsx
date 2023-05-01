export default function CircularLink({ children, link, color, hover }) {
	console.log("hover", hover);

	return (
		<a className={`buttonCircularLink ${hover}`} href={link} target="blank">
			{children}
		</a>
	);
}

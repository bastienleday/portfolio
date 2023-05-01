import CircularLink from "./CircularLink.jsx";
import Audio from "./Audio.jsx";

export default function NavBar({ color, hover }) {
	return (
		<nav className="navBar">
			<div className="circularLinkContainer">
				<CircularLink
					link={"https://www.linkedin.com/in/bastien-leday/"}
					color={color}
					hover={hover}
				>
					<img src={"/pictures/lin.png"} alt={""} className="gitLogo"></img>
				</CircularLink>
				<CircularLink
					link={"https://github.com/bastienleday"}
					color={color}
					hover={hover}
				>
					<img src={"/pictures/git.png"} alt={""} className="gitLogo"></img>
				</CircularLink>
				<CircularLink
					link={"https://www.instagram.com/bastienleday"}
					color={color}
					hover={hover}
				>
					<img
						src={"/pictures/instagram.png"}
						className="instagramLogo"
						alt={""}
					></img>
				</CircularLink>
			</div>
		</nav>
	);
}

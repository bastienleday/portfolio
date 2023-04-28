import CircularLink from "./CircularLink.jsx";

export default function NavBar() {
	return (
		<nav className="navBar">
			<div className="circularLinkContainer">
				<CircularLink link={"https://www.linkedin.com/in/bastien-leday/"}>
					<img src={"/pictures/lin.png"} alt={""} className="gitLogo"></img>
				</CircularLink>
				<CircularLink link={"https://github.com/bastienleday"}>
					<img src={"/pictures/git.png"} alt={""} className="gitLogo"></img>
				</CircularLink>
				<CircularLink link={"https://www.instagram.com/bastienleday"}>
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

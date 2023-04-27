import react, { useEffect } from "react";
import "./componentsCSS/Home.css";
import Welcome from "./Welcome.jsx";
import NavBar from "./NavBar.jsx";
import Next from "./Next.jsx";
import Viewer from "./Viewer.jsx";
import { Canvas } from "@react-three/fiber";
import responsiveCSS from "./componentsCSS/responsiveCSS.css";
import Content from "./componentsCSS/Content.css";
import Skills from "./Skills.jsx";
import { useRef } from "react";
import SkillBar from "./SkillBar.jsx";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
	return (
		<>
			<div className="home">
				<NavBar />
				<div className="gros">
					<div className="homeContent">
						<Welcome />
						<h1 className="title">
							Bastien Leday, <br /> Front End Developer
						</h1>
						<p className="presentation">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							rhoncus pharetra ex laoreet cursus. Maecenas vitae orci et dui
							faucibus molestie. Sed ipsum magna, dignissim ut enim sit amet,
							hendrerit porttitor enim. Nunc sed ultrices magna, sed sagittis
							dui. Integer tincidunt finibus enim imperdiet accumsan. Sed
							aliquet aliquet leo, a lacinia est dignissim in. Aliquam
							sollicitudin viverra enim a dapibus. Aliquam elit ante, vulputate
							a sollicitudin eu, mattis non nunc.
						</p>
					</div>
					<div className="canvasContainer">
						<Canvas>
							<Viewer />
						</Canvas>
					</div>
				</div>
				<div className="nextContainer">
					<Next />
				</div>
			</div>
			<SkillBar>

				<Skills logo={"src/divers/skillsLogo/nodejs.png"} />
				<Skills logo={"src/divers/skillsLogo/ps.png"} />
				<Skills logo={"src/divers/skillsLogo/psql.png"} />
				<Skills logo={"src/divers/skillsLogo/react.png"} />
				<Skills logo={"src/divers/skillsLogo/substance.png"} />
				<Skills logo={"src/divers/skillsLogo/threejs.png"} />
				<Skills logo={"src/divers/skillsLogo/blender.png"} />
				<Skills logo={"src/divers/skillsLogo/js.png"} />
				<Skills logo={"src/divers/skillsLogo/nodejs.png"} />
				<Skills logo={"src/divers/skillsLogo/ps.png"} />
				<Skills logo={"src/divers/skillsLogo/psql.png"} />
				<Skills logo={"src/divers/skillsLogo/react.png"} />
				<Skills logo={"src/divers/skillsLogo/substance.png"} />
				<Skills logo={"src/divers/skillsLogo/threejs.png"} />
			</SkillBar>
			<div className="projectsContainer">
				<div className="projectTitle">
					<p>
						Projects
					</p>
				</div>

				<ProjectCard techno={["react js", "react three fiber"]}>
					This portfolio source code on Github
				</ProjectCard>
				<ProjectCard techno={["node js", "express js", "psql"]}>
					3d model sharing social network API -- wip

				</ProjectCard>
				<div className="moreContainer">
				<p className="more">... and many more to come</p>
				</div>
			</div>

			<Contact/>
			<Footer/>
		</>
	);
}

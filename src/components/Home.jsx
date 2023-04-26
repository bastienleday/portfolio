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
				<Skills logo={"/public/skillsLogo/nodejs.png"} />
				<Skills logo={"/public/skillsLogo/ps.png"} />
				<Skills logo={"/public/skillsLogo/psql.png"} />
				<Skills logo={"/public/skillsLogo/react.png"} />
				<Skills logo={"/public/skillsLogo/substance.png"} />
				<Skills logo={"/public/skillsLogo/threejs.png"} />
				<Skills logo={"/public/skillsLogo/blender.png"} />
				<Skills logo={"/public/skillsLogo/js.png"} />
				<Skills logo={"/public/skillsLogo/nodejs.png"} />
				<Skills logo={"/public/skillsLogo/ps.png"} />
				<Skills logo={"/public/skillsLogo/psql.png"} />
				<Skills logo={"/public/skillsLogo/react.png"} />
				<Skills logo={"/public/skillsLogo/substance.png"} />
				<Skills logo={"/public/skillsLogo/threejs.png"} />
			</SkillBar>
			<div className="projectsContainer">
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
}

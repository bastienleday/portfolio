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
							Bastien Leday, <br /> Web Developer
						</h1>
						<p className="presentation">
							En tant que développeur, je suis passionné par la création d'expériences web et par la 3D
							que je prend plaisir à intégrer à ces expériences.
							J'utilise des outils tels que Three.js, blender et substance painter qui conjugués enssembles
							donnent vie à des applications web uniques et originales.
							J'aime créer des interfaces interactives et immersives pour les utilisateurs,
							et je suis toujours à la recherche de nouvelles façons d'améliorer mes compétences de développement.
							Mon approche est axée sur la créativité et j'aime explorer de nouvelles idées, de nouveaux
							languages et concepts  pour offrir une expérience unique et engageante pour les utilisateurs de mes applications web.

						</p>
					</div>
					<div className="canvasContainer">
						<Canvas className="canvas">
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

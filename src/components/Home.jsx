import react, { useEffect, useState } from "react";
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
import { useMediaQuery} from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import Audio from "./Audio.jsx";


export default function Home() {

	const [background, setBackground] = useState("/pictures/fondHaut.jpg");
	const[backgroundBottom, setBackgroundBottom] = useState("/pictures/fondBas.jpg")

	const backgroundChange = (newBackground, newBackGroundBottom) => {
		setBackground(newBackground)
		setBackgroundBottom(newBackGroundBottom)
	}


	const isMobile = useMediaQuery("(max-width: 1000px)");
	const skillsLogo = [
		"/skillsLogo/nodejs.png",
		"/skillsLogo/ps.png",
		"/skillsLogo/psql.png",
		"/skillsLogo/react.png",
		"/skillsLogo/substance.png",
		"/skillsLogo/threejs.png",
		"/skillsLogo/blender.png",
		"/skillsLogo/js.png",
		"/skillsLogo/nodejs.png",
		"/skillsLogo/ps.png",
		"/skillsLogo/psql.png",
		"/skillsLogo/react.png",
		"/skillsLogo/substance.png",
		"/skillsLogo/threejs.png",

	]

	return (
		<>
			<div className="home" style={{backgroundImage :`url(${background})` }} >
				<Audio />




				<NavBar />
				<div className="gros">
					<div className="homeContent">
						<Welcome />
						<h1 className="title">
							Bastien Leday, <br /> Developpeur Web
						</h1>
						<p className="presentation">
							En tant que développeur, je suis passionné par la création d'expériences web et par la 3D
							que je prends plaisir à intégrer à ces expériences.
							J'utilise des outils tels que Three.js, blender et substance painter qui conjugués ensembles
							donnent vie à des applications web uniques et originales.
							J'aime créer des interfaces interactives et immersives pour les utilisateurs,
							et je suis toujours à la recherche de nouvelles façons d'améliorer mes compétences de développement.
							Mon approche est axée sur la créativité et j'aime explorer de nouvelles idées, de nouveaux
							languages et concepts  pour offrir une expérience unique et engageante pour les utilisateurs de mes applications web.

						</p>
					</div>
					<div className="canvasContainer">
						<Canvas className="canvas">
							<Viewer backgroundChange={backgroundChange}/>
						</Canvas>
					</div>
				</div>
				<div className="nextContainer">
					<Next />
				</div>
			</div>
			<SkillBar>
				{isMobile ?
					skillsLogo.slice(0, 8).map((logo, index) => (
						<Skills key={index} logo={logo} />
					)) :
					skillsLogo.map((logo, index) => (
						<Skills key={index} logo={logo} />
					))
				}


			</SkillBar>
			<div className="projectsContainer" style={{backgroundImage :`url(${backgroundBottom})` }}>
				<div className="projectTitle">
					<p>
						Projects
					</p>
				</div>
				<a href={"https://github.com/bastienleday/portfolio"} target="blank">
				<ProjectCard techno={["react js", "react three fiber"]}>
					Code source de ce portfolio sur github
				</ProjectCard></a>
				<a href={"https://github.com/bastienleday/3D-model-API/tree/main/BACK"} target="blank"><ProjectCard techno={["node js", "express js", "psql"]}>
					API pour un réseau social de partage de modèles 3D -- WIP

				</ProjectCard> </a>
				<div className="moreContainer">
				<p className="more">... et bien d'autres à venir</p>
				</div>
			</div>

			<Contact/>
			<Footer/>
		</>
	);
}

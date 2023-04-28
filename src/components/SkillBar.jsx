import react, { useEffect, useRef, useState } from "react";
import Skills from "./Skills.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import responsiveCSS from "./componentsCSS/responsiveCSS.css";

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

export default function SkillBar({ children }) {
	const skillContainer = useRef(null);

	useEffect(() => {
		const options = {
			threshold: 1, // Le pourcentage de visibilité de l'élément dans le viewport pour déclencher l'animation
		};

		const skillBarMove = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Vérifier si l'élément est visible dans le viewport
					gsap.to(entry.target, {

						duration: 1,
						delay: 0.2,
						display: "flex",
						opacity: 1,
						scrollTrigger: {
							trigger: ".title",
							start: "top 20%",
							end: "bottom 30%",
							toggleActions: "restart none none reverse",


						},
					});
					observer.unobserve(entry.target); // Arrêter d'observer une fois que l'animation est déclenchée
				}
			});
		};

		const observer = new IntersectionObserver(skillBarMove, options);
		if (skillContainer.current) {
			observer.observe(skillContainer.current); // Commencer à observer l'élément au chargement du composant
		}

		return () => {
			// Nettoyer l'observer lors du démontage du composant
			observer.disconnect();
		};
	}, []);

	return (
		<div className="skillContainer">
			<div className="skillContent" ref={skillContainer}>
				{children}
			</div>
		</div>
	);
}

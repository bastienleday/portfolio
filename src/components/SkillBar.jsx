import react, { useEffect, useRef, useState } from "react";
import Skills from "./Skills.jsx";

export default function SkillBar({ children }) {


	const skillContainer = useRef(null);



	useEffect(() => {

		const options = {
			threshold: 0.5, // Le pourcentage de visibilité de l'élément dans le viewport pour déclencher l'animation
		};

		const skillBarMove = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Vérifier si l'élément est visible dans le viewport
					gsap.to(entry.target, {
						y: 250,
						duration: 2,
						delay: 0.2,
						scrollTrigger: {
							trigger: ".skillContainer",

						}
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

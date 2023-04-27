import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function ProjectCard({children, techno }) {

	const main = useRef(null);
	useEffect(() => {
		const options = {
			threshold: 0.4, // Le pourcentage de visibilité de l'élément dans le viewport pour déclencher l'animation
		};

		const cardMove = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Vérifier si l'élément est visible dans le viewport
					gsap.to(entry.target, {
						x: 700,
						duration: 1,
						delay: 0.2,
					});
					observer.unobserve(entry.target); // Arrêter d'observer une fois que l'animation est déclenchée
				}
			});
		};

		const observer = new IntersectionObserver(cardMove, options);
		if (main.current) {
			observer.observe(main.current); // Commencer à observer l'élément au chargement du composant
		}

		return () => {
			// Nettoyer l'observer lors du démontage du composant
			observer.disconnect();
		};
	}, []);

	return (
		<div className="projectCard" id="projectCard" ref={main}>
			<p>{children}</p>
			<ul>
				{techno.map((techno) => (
					<li>{techno}</li>
				))}

			</ul>

		</div>
	);
}

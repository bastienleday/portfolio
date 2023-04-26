import react, {useEffect, useRef, useState} from "react";
import Skills from "./Skills.jsx";


export default function SkillBar({children}) {


    const [scrollX, setScrollX] = useState(0);

    const skillContainer = useRef(null);

    //mise en place d'un observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log("intersecting")}
        })
    })



    useEffect(() => {


        //calculer la position de l'élément par rapport au haut de la page
        function offSetTop (element, acc=0) {
            if(!element.offsetParent){
                return offSetTop(element.offsetParent, acc + element.offsetTop)
            }
            return acc + element.offsetTop
        }

        const handleScroll = (e) => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setScrollX(prevScrollX => prevScrollX + scrollY);


            const screenY = window.scrollY + window.innerHeight / 2;
           const elementY = offSetTop(skillContainer.current) + skillContainer.current.offsetHeight / 2;
           const diffy = elementY - screenY;






            skillContainer.current.style.transform = `translateX(${diffy * -1 * 4}px)`;




        };



        document.addEventListener("scroll", handleScroll);



        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <div className="skillContainer">
            <div className="backgroundImage"></div>

            <div className= "skillsWrapper">

                <div className="skillContent"  ref={skillContainer}>


                    {children}


                </div>
            </div>

        </div>
    )



}


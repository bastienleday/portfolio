import react from "react";
import Link from "./Link.jsx";
import CircularLink from "./CircularLink.jsx";

export default function NavBar() {

    return (
        <nav className="navBar">

            <div className="circularLinkContainer">
                <CircularLink link={'https://www.instagram.com/'}>
                    in
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    <img src={'/public/git.png'} alt={""} className="gitLogo"></img>
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    <img src={'/public/instagram.png'} className="instagramLogo" alt={""}>
                    </img>
                </CircularLink>

            </div>







        </nav>
    )
}
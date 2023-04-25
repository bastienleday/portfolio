import react from "react";
import Link from "./Link.jsx";
import CircularLink from "./CircularLink.jsx";

export default function NavBar() {

    return (
        <nav className="navBar">
            <div className="linkContainer">
                    <Link link={'https://www.instagram.com/'}>
                     Home
                    </Link>
                    <Link link={'https://www.instagram.com/'}>
                        Skills
                    </Link>
                    <Link link={'https://www.instagram.com/'}>
                        Projects
                    </Link>
            </div>
            <div className="circularLinkContainer">
                <CircularLink link={'https://www.instagram.com/'}>
                    in
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    f
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    <img src={'/public/instagram.png'} className="instagramLogo" alt={""}>
                    </img>
                </CircularLink>
                <Link style={{fontWeight : "bold"}}>
                    Contact me
                </Link>
            </div>







        </nav>
    )
}
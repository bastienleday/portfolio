
import CircularLink from "./CircularLink.jsx";

export default function NavBar() {

    return (
        <nav className="navBar">

            <div className="circularLinkContainer">
                <CircularLink link={'https://www.instagram.com/'}>
                    in
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    <img src={'src/divers/pictures/git.png'} alt={""} className="gitLogo"></img>
                </CircularLink>
                <CircularLink link={'https://www.instagram.com/'}>
                    <img src={'src/divers/pictures/instagram.png'} className="instagramLogo" alt={""}>
                    </img>
                </CircularLink>

            </div>







        </nav>
    )
}
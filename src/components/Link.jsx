import react from "react";


export default function Link({children, link, style}) {

    return (
        <a className="buttonLink" href={link} target="_blank" style={style} >
            {children}
        </a>
    )
}
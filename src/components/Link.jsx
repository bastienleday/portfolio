import react from "react";


export default function Link({children, ancre, style}) {


    return (
        <a className="buttonLink" href={ancre} target="_blank" style={style} >
            {children}
        </a>
    )
}
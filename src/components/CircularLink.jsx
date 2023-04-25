import react from "react";

export default function CircularLink({children, link}) {

        return (
            <a className="buttonCircularLink" href={link}>
                {children}
            </a>
        )
}
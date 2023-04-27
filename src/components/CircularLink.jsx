

export default function CircularLink({children, link}) {

        return (
            <a className="buttonCircularLink" href={link} target='blank'>
                {children}
            </a>
        )
}
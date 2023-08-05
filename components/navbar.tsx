import Link from "next/link";
import "./navbar.styles.scss";

const links = [
    {
        href: "/#",
        text: "About"
    },
    {
        href: "/faq",
        text: "FAQ"
    },
    {
        href: "/team",
        text: "Team"
    }
    // we dont need this imo
    // {
    //     href: "/#",
    //     text: "History"
    // }
];

const Navbar = () => {
    return (
        <nav>
            <a href="/#">
                <img src='hackillinois-logo.svg' className="hackillinois-logo" />
            </a>
            <div className="links">
                {links.map(({ href, text }, i) => (
                    <Link key={i} href={href} className="link">
                        {text}
                    </Link>
                ))}
            </div>
            <button className="joinButton">Join Us</button>
        </nav>
    );
};

export default Navbar;

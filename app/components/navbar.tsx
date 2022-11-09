import Link from "next/link";
import "./navbar.styles.scss";

import HACKILLINOIS_LOGO from "../assets/hackillinois-logo.svg";

const links = [
    {
        href: "/#",
        text: "About"
    },
    {
        href: "/#",
        text: "FAQ"
    },
    {
        href: "/#",
        text: "Team"
    },
    {
        href: "/#",
        text: "History"
    }
];

const Navbar = () => {
    return (
        <nav>
            <img src={HACKILLINOIS_LOGO} className="hackillinois-logo" />
            <div className="links">
                {links.map(({ href, text }, i) => <Link key={i} href={href} className="link">{text}</Link>)}
            </div>
            <button>Join Us</button>
        </nav>
    );
};

export default Navbar;

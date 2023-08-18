"use client";
import Link from "next/link";
import "./navbar.styles.scss";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const links = [
    {
        href: "/",
        text: "About"
    },
    {
        href: "/faq",
        text: "FAQ"
    },
    {
        href: "/team",
        text: "Team"
    },
    {
        href: "/history",
        text: "History"
    }
];

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const path = usePathname();
    const router = useRouter();

    const handleOnClickJoinUs = () => {
        router.push("/join-us");
    };

    return (
        <>
            <nav className="navbar">
                <a href="/#">
                    <img
                        src="hackillinois-logo.svg"
                        className="hackillinois-logo"
                    />
                </a>
                <div className="links">
                    {links.map(({ href, text }, i) => (
                        <Link
                            key={i}
                            href={href}
                            className={path === href ? "link active" : "link"}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
                <button onClick={handleOnClickJoinUs} className="joinButton">
                    Join Us
                </button>
            </nav>

            <nav className="mobile">
                <div className="mobileTop">
                    <a href="/#">
                        <img
                            src="hackillinois-logo.svg"
                            className="hackillinois-logo mobile"
                        />
                    </a>
                    <div
                        className={isOpen ? "hamburger open" : "hamburger"}
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={isOpen ? "mobileMenu menuOpen" : "mobileMenu"}>
                    {links.map(({ href, text }, i) => (
                        <a
                            key={i}
                            href={href}
                            className={path === href ? "link active" : "link"}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

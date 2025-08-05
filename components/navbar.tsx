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
    },
    {
        href: "/stories",
        text: "Stories"
    }
];

type NavbarProps = {
    showJoinUsButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    showJoinUsButton = true
}) => {
    const [isOpen, setOpen] = useState(false);
    const path = usePathname();
    const router = useRouter();

    const handleOnClickJoinUs = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
                {showJoinUsButton ? 
                    <button onClick={handleOnClickJoinUs} className="joinButton">
                        Join Us
                    </button>
                : <div></div>}
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
                    {showJoinUsButton ? 
                        <a
                            href="https://go.hackillinois.org/summer24"
                            className={path === "/join-us" ? "link active" : "link"}
                        >
                            Join Us
                        </a> : <></>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;

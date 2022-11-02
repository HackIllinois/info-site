import Link from "next/link";
import "./navbar.styles.scss";

const Navbar = () => {
    return (
        <nav>
            <Link href="/#">About</Link>
            <Link href="/#">FAQ</Link>
            <Link href="/#">Team</Link>
            <Link href="/#">History</Link>
        </nav>
    );
};

export default Navbar;

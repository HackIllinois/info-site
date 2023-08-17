import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <span>Contact Information</span>
                    <span>Reach out to us with any inquiries!</span>
                    <div>
                        <a
                            href="mailto:contact@hackillinois.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/email-border.svg"
                                className={styles.icon}
                            />
                        </a>
                        contact@hackillinois.org
                    </div>
                </div>
                <div>
                    <span>Want to stay up to date?</span>
                    <span>Follow us on social media!</span>
                    <div>
                        <a
                            href="https://instagram.com/HackIllinois"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/instagram-border.svg"
                                className={styles.icon}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/hackillinois/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/linkedin-border.svg"
                                className={styles.icon}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <span>Copyright@2023</span>
                <Link href="/privacy-policy">
                    <span>Privacy Policy</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

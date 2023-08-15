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
                            <img src="/icons/email-border.svg" />
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
                            <img src="/icons/instagram-border.svg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/hackillinois/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/icons/linkedin-border.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <span>Copyright@2023</span>
                <span>Privacy Policy</span>
            </div>
        </footer>
    );
};

export default Footer;

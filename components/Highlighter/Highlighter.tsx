import styles from "./Highlighter.module.scss";

interface HighlighterProps {
    text: string;
}

const Highlighter: React.FC<HighlighterProps> = ({ text }) => {
    let link: string = "";
    let underlined: boolean = false;

    // if (text.includes('Netlify')) {

    // }
    // switch (text) {
    //     case "Netlify":
    //         link = "https://www.netlify.com/privacy/";
    //         underlined = true;
    //         console.log("hi");
    //         break;
    //     // default:
    //     //     link = "";
    //     //     underlined = false;
    //     //     break;
    // }

    return (
        <>
            {text
                .split(" ")
                .map(word =>
                    word == "Netlify" ? (
                        <span
                            className={`${styles.highlighter} ${styles.underlined}`}
                        >
                            Netlify
                        </span>
                    ) : (
                        word
                    )
                )}

            {/* {link.length > 0 ? (
                <a className={styles.link} href={link}>
                    <span
                        className={`${styles.highlighter} ${
                            underlined ? styles.underlined : ""
                        }`}
                    >
                        {text}
                    </span>
                </a>
            ) : (
                <span
                // className={`${styles.highlighter} ${
                //     underlined ? styles.underlined : ""
                // }`}
                >
                    {text}
                </span>
            )} */}
        </>
    );
};

export default Highlighter;

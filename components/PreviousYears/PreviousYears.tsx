import {
    listOfPreviousHacks,
    listOfPreviousHacksPaired
} from "@/modules/ListOfPreviousHacks";
import styles from "./PreviousYears.module.scss";

type previousHack = {
    name: string;
    image: string;
    link: string;
};

const PreviousYears = () => {
    return (
        <>
            <div className={styles.previousHacksListDesktop}>
                <div className={styles.previousHackContainer}>
                    {listOfPreviousHacks.map((previousHack: previousHack) => (
                        <div className={styles.previousHack}>
                            <div className={styles.image}>
                                <a href={previousHack.link}>
                                    <img src={previousHack.image} />
                                </a>
                            </div>
                            <div className={styles.separator}>
                                <div className={styles.line} />
                            </div>
                            <span>
                                <a href={previousHack.link}>
                                    {previousHack.name}
                                </a>
                            </span>
                        </div>
                    ))}
                    <div className={styles.arrow} />
                    {listOfPreviousHacks.map((previousHack: previousHack) => (
                        <div className={styles.previousHack}>
                            <div className={styles.image}>
                                <a href={previousHack.link}>
                                    <img src={previousHack.image} />
                                </a>
                            </div>
                            <div className={styles.separator}>
                                <div className={styles.line} />
                            </div>
                            <span>
                                <a href={previousHack.link}>
                                    {previousHack.name}
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.previousHacksListMobile}>
                {listOfPreviousHacksPaired.map(
                    (previousHackPair: previousHack[]) => (
                        <div className={styles.row}>
                            <div className={styles.previousHack}>
                                {previousHackPair.length > 0 && (
                                    <>
                                        <div className={styles.image}>
                                            <a href={previousHackPair[0].link}>
                                                <img
                                                    src={
                                                        previousHackPair[0]
                                                            .image
                                                    }
                                                />
                                            </a>
                                        </div>
                                        <span>
                                            <a href={previousHackPair[0].link}>
                                                {previousHackPair[0].name}
                                            </a>
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className={styles.separator}>
                                <div className={styles.line} />
                                <div className={styles.arrow} />
                            </div>
                            <div className={styles.previousHack}>
                                {previousHackPair.length > 1 && (
                                    <>
                                        <div className={styles.image}>
                                            <a href={previousHackPair[1].link}>
                                                <img
                                                    src={
                                                        previousHackPair[1]
                                                            .image
                                                    }
                                                />
                                            </a>
                                        </div>
                                        <span>
                                            <a href={previousHackPair[1].link}>
                                                {previousHackPair[1].name}
                                            </a>
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className={styles.spacer} />
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default PreviousYears;

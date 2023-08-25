import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { listOfSponsors } from "@/modules/ListOfSponsors";
import { listOfPreviousHacks } from "@/modules/ListOfPreviousHacks";

type sponsor = {
    name: string;
    website: string;
    logo: string;
};

type previousHack = {
    name: string;
    image: string;
    link: string;
};

const History = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.ourHistory}>
                    <h1>Our History</h1>
                    <p>
                        Lorem ipsum dolor sit amet. At quia omnis et aliquam
                        commodi est aliquam dolores et quas architecto id
                        ratione recusandae nam velit libero aut suscipit odio.
                        Sit velit ullam est sequi harum ut odit assumenda sed
                        consequatur aperiam et repellendus maiores cum earum
                        itaque. Ex quia quam a dolor praesentium id autem dolor
                        ex dolorum dignissimos in deleniti nisi.
                    </p>
                </div>
                <div className={styles.ourHistoryBackground}>
                    <img
                        src="/history/background-top.svg"
                        className={styles.backgroundLeft}
                    />
                </div>
            </div>

            <div className={styles.middleSection}>
                <Container>
                    <h1>Previous Sponsors</h1>
                </Container>
                <div className={styles.sponsorListContainer}>
                    <div className={styles.sponsorList}>
                        {listOfSponsors.map((sponsor: sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} />
                        ))}
                    </div>
                    <div className={styles.sponsorList}>
                        {listOfSponsors.map((sponsor: sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.bottomSection}>
                <Container>
                    <h1>Previous Years</h1>
                    <div className={styles.previousHacksList}>
                        {listOfPreviousHacks.map(
                            (previousHack: previousHack) => (
                                <div className={styles.previousHack}>
                                    <div className={styles.image}>
                                        <a href={previousHack.link}>
                                            <img src={previousHack.image} />
                                        </a>
                                    </div>
                                    <div className={styles.separator}>
                                        <div className={styles.line} />
                                        <div className={styles.arrow} />
                                    </div>
                                    <span>
                                        <a href={previousHack.link}>
                                            {previousHack.name}
                                        </a>
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </Container>
                {/* <div>
                    <img
                        src="/history/background-dotted-square.svg"
                        className={styles.backgroundDottedSquare}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default History;
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { data } from "@/modules/ListOfSponsors";

type sponsor = {
    name: string;
    website: string;
    logo: string;
};

const History = () => {
    return (
        <div>
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
                <div className={styles.slideshow}>
                    <div className={styles.move}>
                        {data.map((sponsor: sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} />
                        ))}
                    </div>
                    <div className={styles.move}>
                        {data.map((sponsor: sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;

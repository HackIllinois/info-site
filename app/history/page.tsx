import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { listOfSponsors } from "@/modules/ListOfSponsors";
import { listOfPreviousHacks } from "@/modules/ListOfPreviousHacks";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'HackIllinois | History',
}

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
                        HackIllinois was founded by a team of students at the
                        University of Illinois at Urbana-Champaign in October
                        2013 with the mission to bring people together and
                        create. In the first year, a team of 50 students
                        assembled to spearhead logistics, finance, promotion,
                        and tech to create the first-ever HackIllinois. 750
                        students from 21 schools came for the inaugural event,
                        launching what would become one of the university’s
                        biggest and favorite events.
                    </p>
                    <p>
                        In the years since, HackIllinois has grown immensely:
                        from working in the world of open source to hosting a
                        plethora of other events to adapting to virtual and
                        hybrid formats, HackIllinois strives to bring students
                        together to learn, create, and explore. Hack yeah!
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

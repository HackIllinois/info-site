import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
// import Button from "@/components/Button/Button";
import { Metadata } from "next";
import Subscribe from "@/components/Subscribe/Subscribe";

export const metadata: Metadata = {
    title: "HackIllinois | Join Us"
};

const JoinUs = () => {
    return (
        <div>
            <div className={styles.topSection}>
                <div className={styles.backgroundLeft}>
                    <img
                        src="/joinUs/background-left.svg"
                        className={styles.backgroundLeft}
                    />
                </div>
                <div className={styles.joinOurTeamContainer}>
                    <span>Join Our Team</span>
                    <p>
                        Unfortunately, our applications are currently closed! <b>We
                        open them during the summer and the fall.</b> If you want to
                        stay notified, subscribe to our mailing list down below!
                    </p>
                    {/* <Button
                        compact
                        text={"Apply Here"}
                        navigateTo="https://forms.gle/3Nsth89B9i9KHosm9"
                        backgroundColor={"#313332"}
                        textColor={"#fff"}
                    /> */}
                </div>
                <div className={styles.backgroundRight}>
                    <img
                        src="/joinUs/background-right.svg"
                        className={styles.backgroundRight}
                    />
                </div>
            </div>
            <Container compact>
                <div className={styles.bottomSection}>
                    <div className={styles.howToJoinContainer}>
                        <span>How do I join?</span>
                        <div>
                            <span>Summer Team Recruitment</span>
                            <p>
                                Our first recruitment cycle begins in June for
                                our summer team. Applications usually are open
                                for one week and require both a written and
                                interview portion for the application. Members
                                who are welcomed on during the summer are able
                                to continue throughout the Fall.
                            </p>
                            <span>Fall Team Recruitment</span>
                            <p>
                                The fall recruitment cycle is the final
                                opportunity of the year to join our team. We
                                open at the beginning of the school year and
                                applications stay open for a few weeks.
                            </p>
                        </div>
                    </div>
                    <div className={styles.wantToLearnContainer}>
                        <span>Want to learn more?</span>
                        <div>
                            <span>Subscribe to our mailing list!</span>
                            <p>
                                This mailing list is for people interested in{" "}
                                <b>joining the HackIllinois team</b>! For event
                                applicants, it can be found{" "}
                                <b>
                                    <a href="https://hackillinois.org">here</a>
                                </b>
                                .
                            </p>
                        </div>
                        <Subscribe />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default JoinUs;

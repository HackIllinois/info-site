"use client";
import { useState } from "react";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import { Metadata } from "next";
import { subscribe } from "@/utils/api";
const validator = require("validator");

export const metadata: Metadata = {
    title: "HackIllinois | Join Us"
};

const JoinUs = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubscription = async () => {
        if (!validator.isEmail(email)) {
            alert("Please enter a valid email address!");
        } else {
            console.log("sending request");
            subscribe("2024_attendee_interest", email);
            setEmail(""); // clear input field after submitting
            console.log("request complete");
        }
    };

    const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSubscription();
        }
    };
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
                        Interested in shaping the future of HackIllinois? Our
                        applications are currently open until{" "}
                        <b>September 6, 2023</b>!
                    </p>
                    <Button
                        compact
                        text={"Apply Here"}
                        navigateTo="https://forms.gle/3Nsth89B9i9KHosm9"
                        backgroundColor={"#313332"}
                        textColor={"#fff"}
                    />
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
                                    <u>here</u>
                                </b>
                                .
                            </p>
                        </div>
                        <div>
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmailChange}
                                onKeyDown={handleKeydown}
                            ></input>
                            <button
                                className={styles.joinbutton}
                                onClick={() => handleSubscription()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default JoinUs;

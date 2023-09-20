import "./mainpage.styles.scss";
import { data } from "@/modules/ListOfTeams";
import Image from "next/image";

import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HackIllinois | About"
};

type listOfTeams = {
    name: string;
    icon: string;
};

const Page = () => {
    return (
        <div className="page">
            <div className="logo-div">
                <img src="main-background.svg" className="main-logo" />

                <div className="icon-div">
                    <img src="hackillinois-main.svg" className="iconPosition" />
                </div>
                <h2 className="text-div">
                    The University of Illinois at Urbana Champaign’s premier,
                    student-run hackathon!
                </h2>
            </div>

            {/* Main Body of the page */}
            <Container style={{ rowGap: "5rem" }}>
                <div className="section-div">
                    <h1>What is HackIllinois?</h1>
                    <div className="textbox">
                        <br></br>
                        <p className="p-text">
                            HackIllinois is the premier student-run hackathon at
                            the University of Illinois at Urbana-Champaign. Each
                            spring, HackIllinois hosts nearly a thousand
                            students who work together for a weekend to learn
                            new skills and technologies to create innovative
                            hacks such as websites, mobile apps, and many more!
                        </p>
                        <img src="what-is-hack.svg" className="tilted-hack" />
                    </div>
                </div>
                <div className="our-mission-div">
                    <h1>Our Mission</h1>
                    <div className="textbox">
                        <br></br>
                        <p className="p-text">
                            We aim to promote growth and collaboration among
                            both new and experienced programmers. The
                            HackIllinois team organizes annual events for
                            students to connect and create projects with their
                            peers. We strive to celebrate the innovative and
                            creative spirits of students nationwide!
                        </p>
                        <img src="our-mission.svg" className="our-mission" />
                    </div>
                </div>
                {/* Bottom Section, including Team and Contact us */}
                <div className={styles.bottomSection}>
                    <div className={styles.teamsSection}>
                        <h1>HackIllinois Teams</h1>
                        <div className={styles.body}>
                            <div className={styles.list}>
                                <ul>
                                    {data.map((team: listOfTeams) => (
                                        <div className={styles.listItem}>
                                            <Image
                                                src={team.icon}
                                                height={16}
                                                width={16}
                                                alt={team.name}
                                            />
                                            <li className={styles.listItemText}>
                                                {team.name}
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                                <Button
                                    text={"Meet the Teams"}
                                    navigateTo="/team"
                                    backgroundColor={"#68C8BF"}
                                    textColor={"#FCE891"}
                                />
                            </div>
                            <div className={styles.pictures}>
                                <img
                                    src="/about/teams-pic1.png"
                                    alt="teams-pic1"
                                />
                                <img
                                    src="/about/teams-earth-vector.svg"
                                    alt="vector"
                                />
                            </div>
                        </div>
                        <img
                            src="/about/shapes/yellow-dotted-line.svg"
                            alt="vector"
                        />
                    </div>
                    <div className={styles.contactSection}>
                        <h1>Connect With Us</h1>
                        <div className={styles.contactBody}>
                            <div>
                                <p>
                                    Want to stay up-to-date with HackIllinois
                                    events or exciting news? Keep in touch with
                                    us through our social medias! Be sure to
                                    check out our FAQ for common inquiries.
                                    Still have a question? Reach out to us at{" "}
                                    <a href="mailto:contact@hackillinois.org">
                                        contact@hackillinois.org
                                    </a>
                                    .
                                </p>
                                <div className={styles.icons}>
                                    <div>
                                        <a
                                            href="https://www.facebook.com/hackillinois/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/facebook.svg"
                                            />
                                        </a>
                                        <a
                                            href="https://instagram.com/HackIllinois"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/instagram.svg"
                                            />
                                        </a>
                                        <a
                                            href="https://twitter.com/HackIllinois"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/twitter.svg"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.linkedin.com/company/hackillinois/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/linkedin.svg"
                                            />
                                        </a>
                                        <a
                                            href="https://github.com/HackIllinois"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/github.svg"
                                            />
                                        </a>
                                        <a
                                            href="mailto:contact@hackillinois.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className={styles.icon}
                                                src="/icons/email.svg"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img src="/about/connect-vector.svg" alt="vector" />
                        </div>
                    </div>
                </div>
            </Container>
            <div className={styles.bottomVectors}>
                <img
                    src="/about/shapes/yellow-horizontal-line.svg"
                    alt="vector"
                />
                <img src="/about/shapes/green-circles-group.svg" alt="vector" />
            </div>

            {/* <h1>Info Hack!</h1> */}
        </div>
    );
};

export default Page;

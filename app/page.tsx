import MAIN_LOGO from "app/assets/main-logo.svg";
import MAIN_DOTS from "app/assets/main-dots.svg";
import HACK_LOGO from "app/assets/hackillinois-main.svg";
import WHY_HACK from "app/assets/what-is-hack.svg";
import MISSION from "app/assets/shape-friends.svg";
import "./mainpage.styles.scss";
import { data } from "@/modules/ListOfTeams";
import Image from "next/image";

import styles from "./page.module.scss";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";

type listOfTeams = {
    name: string;
    icon: string;
};

const Page = () => {
    return (
        <div className="page">
            <div className="logo-div">
                <img src={MAIN_LOGO} className="main-logo" />
                <div className="dots-div">
                    <img src={MAIN_DOTS} className="main-logo dots" />
                    <img src={MAIN_DOTS} className="main-logo dotsTwo" />
                    <img src={MAIN_DOTS} className="main-logo dotsThree" />
                </div>
                <div className="icon-div">
                    <img src={HACK_LOGO} className="iconPosition" />
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
                            HackIllinois is the premiere student-run hackathon
                            at the University of Illinois at Urbana-Champaign.
                            Each Spring, HackIllinois hosts nearly a thousand
                            students who work together for a weekend to learn
                            new skills and technologies to create innovative
                            hacks such as websites, mobile apps, and many more!
                        </p>
                        <img src={WHY_HACK} className="tilted-hack" />
                    </div>
                </div>
                <div className="section-div">
                    <h1>Our Mission</h1>
                    <div className="textbox">
                        <br></br>
                        <p className="p-text">
                            Our goal is to promote growth and collaboration
                            among both new and experienced programmers. The
                            HackIllinois team organize and plan events each year
                            where students can come together to create projects
                            with their peers. We strive to celebrate the
                            innovative and creative spirits of students
                            nationwide!
                        </p>
                        {/* <img src={MISSION} className="tilted-hack" /> */}
                    </div>
                </div>
                {/* Bottom Section, including Team and Contact us */}
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
                            <img src="/about/teams-pic1.png" alt="teams-pic1" />
                            <Image
                                src="/about/teams-earth-vector.svg"
                                width={280}
                                height={280}
                                alt="vector"
                            />
                        </div>
                    </div>
                </div>
            </Container>

            {/* <h1>Info Hack!</h1> */}
        </div>
    );
};

export default Page;

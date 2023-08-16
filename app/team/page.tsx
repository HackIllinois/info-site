import React from "react";
import Image from "next/image";
import { data } from "@/modules/TeamData";
import styles from "./page.module.scss";
import Container from "@/components/Container/Container";

type team = {
    teamName: string;
    teamMembers: teamMember[];
};

type teamMember = {
    name: string;
    position: string;
    funFact: string;
    photo: string;
    emoji: string;
};

const Page = () => {
    return (
        <>
            <Container>
                {data.map((team: team, index: React.Key) => (
                    <div className={styles.teamLayout} key={index}>
                        <h1>{team.teamName}</h1>
                        <div className={styles.membersLayout}>
                            {team.teamMembers.map(
                                (member: teamMember, key: React.Key) => (
                                    <div
                                        className={styles.memberCard}
                                        key={key}
                                    >
                                        <div className={styles.nameAndPosition}>
                                            <span className={styles.name}>
                                                {member.name}
                                            </span>
                                            <span className={styles.position}>
                                                {member.position}
                                            </span>
                                        </div>
                                        <div className={styles.emojiAndPhoto}>
                                            <div
                                                className={
                                                    styles.emojiContainer
                                                }
                                            >
                                                <span className={styles.emoji}>
                                                    {member.emoji}
                                                </span>
                                            </div>
                                            <img
                                                src={
                                                    member.photo
                                                        ? member.photo
                                                        : "team/default.svg"
                                                }
                                                alt={member.name}
                                                className={styles.photo}
                                            />
                                        </div>
                                        <div className={styles.funFact}>
                                            <span className={styles.fact}>
                                                {member.funFact}
                                            </span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </Container>
            <div className={styles.footerArt}>
                <img src="team-footer-shapes.svg" className={styles.shapes} />
                <img
                    src="team-footer-characters.svg"
                    className={styles.characters}
                />
            </div>
        </>
    );
};

export default Page;

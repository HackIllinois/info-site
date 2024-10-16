"use client";
import React, { useState } from "react";
import { data } from "@/modules/TeamData";
import styles from "./Team.module.scss";
import Container from "@/components/Container/Container";
import Select from "../Select/Select";

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

type year = keyof typeof data;

const Team = () => {
    const options = Object.keys(data).reverse() as year[];
    const [year, setYear] = useState<year>(options[0]);

    return (
        <>
            <Container>
                <div className={styles.mainTitle}>
                    <h1>Meet our</h1>
                    <Select 
                        options={options}
                        titleStyle={styles.selectTitleStyle}
                        optionStyle={styles.optionStyle}
                        selectedStyle={styles.selectedStyle}
                        setSelected={setYear}
                    />
                    <h1>Team</h1>
                </div>
                {data[year].map((team: team, index: React.Key) => (
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
                                                loading="lazy"
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

export default Team;

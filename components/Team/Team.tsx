"use client";
import React, { useEffect, useState } from "react";
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

const years = ["2024"] as const; // Array of years with team data in reverse chronological order

const Team = () => {
    const [year, setYear] = useState<(typeof years)[number]>("2024"); // Most recent year
    const [team, setTeam] = useState<team[]>([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            const response = await fetch(`/team/data/${year}.json`);
            const data = await response.json();
            setTeam(data);
        };

        fetchTeamData();
    }, [year]);

    return (
        <>
            <Container>
                <div className={styles.mainTitle}>
                    <h1>Meet our</h1>
                    <Select
                        options={years}
                        titleStyle={styles.selectTitleStyle}
                        optionStyle={styles.optionStyle}
                        selectedStyle={styles.selectedStyle}
                        setSelected={setYear}
                    />
                    <h1>Team</h1>
                </div>
                {team.map((team: team, index: React.Key) => (
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
                                                        ? `/team/photos/${year}/${member.photo}`
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

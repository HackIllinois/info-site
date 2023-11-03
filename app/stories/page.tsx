import React from "react";
import StoryGrid from "@/components/StoryGrid/StoryGrid";
import styles from "./page.module.scss";
import { data } from "@/modules/StoriesData";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

type story = {
    id: string;
    name: string;
    image: string;
    avatar: string;
    quote: string;
    carousel: storyCarousel[];
};

type storyCarousel = {
    image: string;
};

const Stories = () => {
    return (
        <div className={styles.stories}>
            <h1>What’s it like being a part of the HackIllinois team?</h1>
            <div className={styles.topSection}>
                <div className={styles.backgroundTopLeft}>
                    <img src="/stories/background-top-left-up.svg" />
                    <img src="/stories/background-top-left-down.svg" />
                </div>
                <div className={styles.banner}>
                    {data
                        .filter((el: story) => el.id === "banner")
                        .map((story: story, index: React.Key) => (
                            <StoryGrid
                                name={story.name}
                                avatar={story.avatar}
                                quote={story.quote}
                                carousel={story.carousel}
                                compact
                                key={index}
                            />
                        ))}
                </div>
                <div className={styles.backgroundTopRight}>
                    <img src="/stories/background-top-right.svg" />
                </div>
            </div>
            <div className={styles.middleSection}>
                {data
                    .filter((el: story) => el.id !== "banner")
                    .map((story: story, index: React.Key) => {
                        return (
                            <React.Fragment key={`${story.name}${index}`}>
                                {index === 2 && (
                                    <div className={styles.backgroundMiddle}>
                                        <img src="/stories/background-middle.svg" />
                                    </div>
                                )}
                                <StoryGrid
                                    name={story.name}
                                    avatar={story.avatar}
                                    quote={story.quote}
                                    carousel={story.carousel}
                                />
                            </React.Fragment>
                        );
                    })}
            </div>
            <div className={styles.bottomSection}>
                <img
                    src="/stories/background-bottom-left.svg"
                    className={styles.backgroundBottomLeft}
                />
                <div className={styles.joinUs}>
                    <h1>Join the team, we’d love to have you!</h1>
                    <Button
                        text={"Apply Now!"}
                        navigateTo="/join-us"
                        backgroundColor={"#FBC587"}
                        textColor={"#FFFFFF"}
                        compact
                    />
                </div>
                <img
                    src="/stories/background-bottom-right.svg"
                    className={styles.backgroundBottomRight}
                />
            </div>
        </div>
    );
};

export default Stories;

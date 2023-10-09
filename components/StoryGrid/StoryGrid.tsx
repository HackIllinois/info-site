import React from "react";
import styles from "./StoryGrid.module.scss";

interface StoryGridProps {
    name: string;
    image: string;
    avatar: string;
    quote: string;
}

const StoryGrid: React.FC<StoryGridProps> = ({
    name,
    image,
    avatar,
    quote
}) => {
    return (
        <div className={styles.storyGrid}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.story}>
                <img src={avatar} alt={name} className={styles.avatar} />
                <div className={styles.text}>
                    <span className={styles.quote}>{quote}</span>
                    <span className={styles.name}>- {name}</span>
                </div>
            </div>
        </div>
    );
};

export default StoryGrid;

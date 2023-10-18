"use client";
import React from "react";
import styles from "./StoryGrid.module.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// splide core styling
import "@splidejs/react-splide/css/core";
// Default theme
import '@splidejs/react-splide/css';

interface StoryGridProps {
    name: string;
    avatar: string;
    quote: string;
    carousel: storyGridCarousel[];
    compact?: boolean;
}

type storyGridCarousel = {
    image: string;
};

const StoryGrid: React.FC<StoryGridProps> = ({
    name,
    avatar,
    quote,
    carousel,
    compact = false
}) => {
    return (
        <div className={compact ? styles.compactStoryGrid : styles.storyGrid}>
            <Splide
                options={{rewind: true}}
                aria-label="image-carousel"
                aria-labelledby="image-carousel"
                className={styles.carousel}
            >
                {carousel.map((carousel: storyGridCarousel) => (
                    <SplideSlide key={carousel.image} className={styles.slide}>
                        <img
                            src={carousel.image}
                            alt={name}
                        />
                    </SplideSlide>
                ))}
            </Splide>
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

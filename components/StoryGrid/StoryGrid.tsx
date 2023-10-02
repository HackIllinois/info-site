import React from "react";
import styles from "./StoryGrid.module.scss";

interface StoryGridProps {
    name: string;
    image: string;
    avatar: string;
    caption: string;
}

const StoryGrid: React.FC<StoryGridProps> = ({
    name,
    image,
    avatar,
    caption
}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <div>
                <img src={avatar} alt={name} />
                <div>
                    <span>{caption}</span>
                    <span>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default StoryGrid;

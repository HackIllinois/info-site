import StoryGrid from "@/components/StoryGrid/StoryGrid";
import styles from "./page.module.scss";
import { data } from "@/modules/StoriesData";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

type story = {
    id: string;
    data: storyData[];
};

type storyData = {
    name: string;
    image: string;
    avatar: string;
    quote: string;
};

const Stories = () => {
    return (
        <div className={styles.stories}>
            <h1>What’s it like being a part of the HackIllinois team?</h1>
            <div className={styles.grid}>
                {data.map((story: story) =>
                    story.data.map((storyData: storyData) => (
                        <StoryGrid
                            name={storyData.name}
                            image={storyData.image}
                            avatar={storyData.avatar}
                            quote={storyData.quote}
                        />
                    ))
                )}
            </div>
            <h1>Join the team, we’d love to have you!</h1>
            <Button
                text={"Apply Now!"}
                navigateTo="/join-us"
                backgroundColor={"#FBC587"}
                textColor={"#FFFFFF"}
                compact
            />
        </div>
    );
};

export default Stories;

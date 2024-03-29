import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import Box from "@/components/FaqBox/Box";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'HackIllinois | FAQ',
}

const Page = () => {
    return (
        <div>
            <h1 className={styles.mainTitle}>Frequently Asked Questions</h1>
            <div className={styles.faqContent}>
                <div className={styles.side1}>
                    <Container>
                        <Box
                            title="I want to attend, mentor, or speak at one of HackIllinois’s events. How do I learn more?"
                            description="Contact us at <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a> for involvement or questions regarding HackIllinois. In addition, check out our social medias for the latest information on our events!"
                        />
                        <Box
                            title="Who organizes HackIllinois?"
                            description="HackIllinois is a team made up of passionate UIUC students! Our internal community is focused on improving the experience of HackIllinois while also creating lasting connections with one another. We have students from many different majors and backgrounds, all bringing unique perspectives to the team."
                        />
                        <Box
                            title="What is the Summer Team? What is the Fall Team?"
                            description="The Summer Team helps prepare the theme for the Hackathon in the Spring and lays down the foundation for the Fall Team to work on planning for events. Generally, our Summer Team continues on to join the new members for the Fall."
                        />
                        <Box
                            title="Application Dates?"
                            description="We have two recruitment cohorts: one in the summer and one in the fall. Check our social media for the latest information about applications!"
                        />
                    </Container>
                </div>
                <div className={styles.side2}>
                    <Container>
                        <img className={styles.logo} src="/faq/logo.svg" />
                        <Box
                            title="What is the role of each team?"
                            description="HackIllinois is composed of five teams, who work closely together to create HackIllinois! <br/><br/> 1. The Experience Team organizes the logistics and operations behind our events, such as scheduling, mentor/speaker outreach, and attendee amenities. During the event, they manage content ranging from workshops taught by industry professionals to our infamous Nerf gun tournament! <br/><br/> 2. The Outreach Team builds and maintains relationships with companies and corporate sponsors to effectively raise funding for HackIllinois. They also plan and execute company-sponsored events. Past sponsors include the likes of Fortune 500 companies and MAANG! <br/><br/> 3. The Systems Team handles the technology infrastructure for HackIllinois, such as creating our website, mobile apps, and API. Systems is divided into four subteams: web, Android, iOS, and API. You can see our past websites and most recent android and iOS apps! <br/><br/> 4. The Design Team designs the brand, graphics, and UI/UX for HackIllinois media for posters, websites, mobile apps, and swag. You can catch them brainstorming in Figma or creating t-shirt mock-ups in Adobe Illustrator! <br/><br/> 5. The Marketing Team creates promotional content, collaborates with external organizations for increasing our event scope and audience, and runs social media platforms. Their overarching goal is to promote diversity and inclusion in HackIllinois. You can observe their handiwork in our Instagram and all event communications!"
                        />
                        <Box
                            title="What is being on staff like? What’s the time commitment? Are meetings in-person or virtual?"
                            description="1. We would describe HackIllinois staff as a family of collaborators, working together to spread our passions to others. This may includes everything from discussing progress each weekly meeting to random late-night boba runs. See our <a href='/#'>About</a> section for more staff testimonials! <br/><br/> 2. Staff members are expected to attend one-hour weekly meetings and contribute to assigned tasks for around an additional two-three hours each week. However, time commitment ebbs and flows with timeline—for instance, commitment for most teams grows as HackIllinois nears—so exact time commitment changes. <br/><br/> 3. Meetings are virtual during the summer and in-person during the school year."
                        />
                    </Container>
                </div>
                <img
                    src="/faq/background-left.svg"
                    className={styles.backgroundLeft}
                />
                <img
                    src="/faq/background-right.svg"
                    className={styles.backgroundRight}
                />
            </div>
        </div>
    );
};

export default Page;

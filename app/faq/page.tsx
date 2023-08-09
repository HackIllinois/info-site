import "./faq.scss";
import Box from "@/components/FaqBox/Box";

const Page = () => {

    return(
        <div className="faq-main">
            <h1 className="main-title">Frequently Asked Questions</h1>

            <div className="faq-content">
                <div className="side-1">
                    <Box title= "I want to attend, mentor, or speak at one of HackIllinois’s events. How do I learn more?" description="Check out our social medias for the latest information on our events." />
                    <br />
                    <Box title= "Who organizes HackIllinois?" description="HackIllinois is a team made up of passionate UIUC students! Our internal community is focused on improving the experience of HackIllinois while also creating lasting connections with one another. We have students from many different majors and backgrounds, all bringing unique perspectives to the team." />
                    <br />
                    <Box title= "What is the Summer Team? What is the Fall Team?" description="The Summer Team helps prepare the theme for the Hackathon in the Spring and lays down the foundation for the Fall Team to work on planning for events. Generally, our Summer Team continues on to join the new members for the Fall." />
                    <br />
                    <Box title= "Application Dates?" description="We have two recruitment cohorts: one in the summer and one in the fall. Check our social media for the latest information about applications!" />
                </div>

                <div className="side-2">
                    <img className="logo" src='/faq/logo.svg' />
                    <br/><br/>
                    <Box title="What is the role of each team?" description="1. HackIllinois is composed of five teams, who work closely together to create HackIllinois! <br/><br/> 2. The Experience Team organizes the logistics and operations behind our events, including (but not limited to) scheduling, mentor/speaker outreach, attendee amenities, etc. During the event, they manage content ranging from workshops taught by industry professionals to our infamous nerf gun tournament! <br/><br/> 3. The Outreach Team builds and maintains relationships with companies and corporate sponsors in order to effectively raise funding for HackIllinois, as well as plan and execute company-sponsored events. Past sponsors include the likes of Fortune 500 companies and MAANG. <br/><br/> 4. The Systems Team handles the technology infrastructure for HackIllinois, creating our website, mobile apps, and API. Systems is divided into four subteams: web, android, iOS, and API. You can see our past websites and our most recent android and iOS apps! <br/><br/> 5. The Design Team designs the brand, graphics, and UI/UX for various media, such as posters, websites, mobile apps, and swag! You can catch them brainstorming away in Figma or creating t-shirt mock-ups in Illustrator. <br/><br/> 6. The Marketing Team creates promotional content, runs social media platforms, and collaborates with external organizations for increasing our event scope and audience, with the overarching goal of promoting diversity and inclusion in HackIllinois." />
                    <br/><br/>
                    <Box title="What is being on staff like? What’s the time commitment? Are meetings in-person or virtual?" description="1. We would describe HackIllinois staff as a family of collaborators, working together to spread our passions to others. This may includes everything from discussing progress each weekly meeting to random late-night boba runs. See our <a href='/#'>About</a> section for more staff testimonials! <br/><br/> 2. Staff members are expected to attend one-hour weekly meetings and contribute to assigned tasks for around an additional one hour each week. However, time commitment ebbs and flows with timeline—for instance, commitment for most teams grows as HackIllinois nears—so exact time commitment changes. <br/><br/> 3. Meetings are virtual during the summer and in-person during the school year." />
                </div>
            </div>
            <img className="faq-background" src="/faq/background.svg" />
        </div>
    )
};

export default Page;

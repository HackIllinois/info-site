import Navbar from "../components/navbar";
import PageSvg from "../assets/team/team-page-svg";
import PAGEFOOTER from "../assets/team-footer.svg";
import PAGEFOOTSHAPES from "../assets/team-footer-shapes.svg";
import lasya from "../assets/team/lasya.jpeg";
import emily from "../assets/team/emily.jpeg";
import alex from "../assets/team/alex.jpeg";
import jasmine from "../assets/team/jasmine.jpeg";
import rachel from "../assets/team/rachel.jpeg";

import { TeamData } from "@/modules/TeamData";
import styles from "./page.module.scss";
import Container from "../components/Container/Container";

type team = {
    teamName: string;
    teamMembers: teamMember[];
};

type teamMember = {
    name: string;
    position: string;
    funFact: string;
    photo: string;
};

const Page = () => {
    return (
        <Container>
            {/* {TeamData.map((item: team) => (
                <div>{item.team}</div>
                // <div>
                //     <h1>{team}</h1>
                //     <div className="section">
                //         {people.map((name, i) => (
                //             <div className="column">
                //                 <div className="box">
                //                     <img src={photos[i]} className="pfp" />
                //                     <h2>{people[i]}</h2>
                //                     <h3>{position[i]}</h3>
                //                     <p>{"Fun Fact: " + facts[i]}</p>
                //                 </div>
                //             </div>
                //         ))}
                //     </div>
                // </div>
            ))} */}
            {TeamData.map((team: team) => (
                <div className={styles.teamLayout}>
                    <h1>{team.teamName}</h1>
                    <div className={styles.membersLayout}>
                        {team.teamMembers.map((member: teamMember) => (
                            <div className={styles.memberCard}>
                                <div className={styles.photo}>
                                    <img
                                        src={
                                            member.photo
                                                ? member.photo
                                                : "team/default.svg"
                                        }
                                    />
                                </div>
                                <span>{member.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* {<img src={PageSvg}></img>} */}
            <img src={PAGEFOOTER} className="page-svg" />
            {/* <img src={PAGEFOOTSHAPES} className="page-svg-2" /> */}
            {/* <div className="page-svg"> 
                <PageSvg />
            </div> */}
        </Container>
    );
};

export default Page;

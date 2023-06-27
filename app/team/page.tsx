import Navbar from "../components/navbar";
import "./main.scss"
import PageSvg from "../assets/team/team-page-svg";
import PAGEFOOTER from "../assets/team-footer.svg";
import PAGEFOOTSHAPES from "../assets/team-footer-shapes.svg";
import lasya from "../assets/team/lasya.jpeg";
import emily from "../assets/team/emily.jpeg";
import alex from "../assets/team/alex.jpeg";
import jasmine from "../assets/team/jasmine.jpeg";
import rachel from "../assets/team/rachel.jpeg"; 

const headers = [
    {
        team: "Co-Directors",
        people: ["Ronit Anadani", "Pinakin Kanade"],
        position: ["Co-Director", "Co-Director"],
        facts: ["..", ".."],
        photos: []
    },
    {
        team: "Systems",
        people: ["Lasya Neti", "Join our summer team!"],
        position: ["Systems Lead", ""],
        facts: ["I met Jake from State Farm!", "This could be you :)"],
        photos: [lasya.src]
    },
    {
        team: "Experience",
        people: ["Rachel Shum", "Jennifer Xia", "Join our summer team!"],
        position: ["Experience Co-Lead", "Experience Co-Lead", ""],
        facts: ["..", "..", "This could be you :)"],
        photos: [rachel.src]
    },
    {
        team: "Design",
        people: ["Alex Fang", "Jasmine Lin", "Join our summer team!"],
        position: ["Design Co-Lead", "Design Co-Lead", ""],
        facts: ["...", "I love collecting plants but I'm very bad at keeping them alive", "This could be you :)"],
        photos: [alex.src, jasmine.src]
    },
    {
        team: "Marketing",
        people: ["Emily Tung", "Join our summer team!"],
        position: ["Marketing Lead", ""],
        facts: ["...", "This could be you :)"],
        photos: [emily.src]
    },
    {
        team: "Outreach",
        people: ["Amit Prasad", "Join our summer team!"],
        position: ["Outreach Lead", ""],
        facts: ["...", "This could be you :)"],
        photos: []
    },
];


const Page = () => {
    return (
        <div className="display">
            {headers.map(({team, people, position, facts, photos}) => (
                <div>
                    <h1>{team}</h1>
                    <div className="section">
                        {people.map((name, i) => (
                            <div className="column">
                                <div className="box"> 
                                    <img src={photos[i]} className="pfp"/> 
                                    <h2>{people[i]}</h2>
                                    <h3>{position[i]}</h3>
                                    <p>{"Fun Fact: " + facts[i]}</p>              
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* {<img src={PageSvg}></img>} */}
            <img src={PAGEFOOTER} className="page-svg" />
            <img src={PAGEFOOTSHAPES} className="page-svg-2" />
            {/* <div className="page-svg"> 
                <PageSvg />
            </div> */}


        </div>
    );
};



export default Page;
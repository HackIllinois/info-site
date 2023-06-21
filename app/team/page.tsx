import Navbar from "../components/navbar";
import "./main.scss"
import PageSvg from "../assets/team/team-page-svg";
import PAGEFOOTER from "../assets/team-footer.svg";
import PAGEFOOTSHAPES from "../assets/team-footer-shapes.svg";

const headers = [
    {
        team: "Co-Directors",
        people: ["Deeya Bodas", "Jonathan Gao"],
        position: ["Co Director", "Co Director"],
        facts: ["A Fact", "B Fact"]
    },
    {
        team: "Systems",
        people: ["Ashay Parikh", "Lasya Neti", "Rachel Shum", "Jareth Gomes", "Aniket Gargya"],
        facts: ["A Fact", "B Fact", "C Fact", "D Fact", "E Fact"]
    }
];


const Page = () => {
    return (
        <div className="display">
            {headers.map(({team, people, facts}) => (
                <div>
                    <h1>{team}</h1>
                    <div className="section">
                        {people.map((name, i) => (
                            <div className="column">
                                <div className="box"> 
                                    <h2>{people[i]}</h2>
                                    <p>{facts[i]}</p>              
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* <img src={PageSvg}></img> */}
            <img src={PAGEFOOTER} className="page-svg" />
            <img src={PAGEFOOTSHAPES} className="page-svg-2" />
            {/* <div className="page-svg"> 
                <PageSvg />
            </div> */}


        </div>
    );
};



export default Page;
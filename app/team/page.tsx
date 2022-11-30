import Navbar from "../components/navbar";
import "./main.scss"

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
        <div>
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
            

        </div>
    );
};



export default Page;
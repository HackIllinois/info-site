import Navbar from "../components/navbar";
import "./main.scss"

const Page = () => {
    return (
        <div>
        <div>
            <h1>Co-Directors</h1>
            <div className="section">
                <div className="column">
                    <div className="box"> 
                        <h2>Deeya Bodas</h2>
                        <p>Some text..</p>              
                    </div>
                </div>

                <div className="column">
                    <div className="box"> 
                        <h2>Jon</h2>

                        <p >Title here...</p>   
                        <p className="fun">Fun fact here...</p>    
        
                    </div>
                </div>
                </div>
                

                <div>
                <h1> Systems</h1>
                <div className="section">

                <div className="column">
                    <div className="box"> 
                        <h2>Laasya</h2>
                        <p>Some text..</p>              
                    </div>
                    <div className="column">
                    <div className="box"> 
                        <h2>Aniket Gargya</h2>
                        <p>Some text..</p>              
                    </div>
                </div>
                <div className="column">
                    <div className="box"> 
                        <h2>Deeya Bodas</h2>
                        <p>Some text..</p>              
                    </div>
                </div>
                <div className="column">
                    <div className="box"> 
                        <h2>Deeya Bodas</h2>
                        <p>Some text..</p>              
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div>
                <h1> Experience</h1>
                </div>

                <div>
                <h1> Outreach</h1>
                </div>

                <div>
                <h1>Design </h1>
                </div>

                <div>
                <h1>Marketing </h1>
                </div>
                
                
            </div>
        </div>
    );
};



export default Page;
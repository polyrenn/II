import Header from "../components/header";
import Modal3 from "../components/Modal3";
import Navbar from "../components/Navbar";

function Police(){
    return(
        <div className="police">
            <Header/>
            <div className="container">
            <div className="helloPink">
                <div className="daisy">
                    <p>Hello, Cleopatra</p>
                    <p>No immediate issue found</p>
                </div>
                <div className="emoji">
                    <img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-64.png" alt="icon" className="icon" />
                </div>
            </div>
            <div className="button">
                <p>On Patrol</p>
            </div>
            </div>
            <div className="mapspace">
                <Modal3/>
            </div>
            <Navbar/>
        </div>
    )
}
export default Police;
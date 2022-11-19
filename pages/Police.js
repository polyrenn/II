import Header from "../components/header";
import Modal3 from "../components/Modal3";
import Navbar from "../components/Navbar";
import Topguy from "../components/Topguy";

function Police(){
    return(
        <div className="police">
            <Header/>
            <div className="container">
            <Topguy
                first="Hello, Cleopatra"
                second="No immediate issue found"
                image="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-64.png"
            />
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
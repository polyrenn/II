import Header from "../components/header";
import Navbar from "../components/Navbar";
import Topguy from "../components/Topguy";
import Feed from "../components/Feed_Components/Feed";

function Feeds(){
    return(
        <section>
            <Header/>
            <div className="container">
                <Topguy
                    first="Happening Around"
                    second="1st East District"
                    image="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-64.png"
                />
                <Feed/>
                <div className="no_more">
                    <p>No more reports. Stay Safe</p>
                </div>
            </div>
            <Navbar/>
        </section>
    )
}
export default Feeds;
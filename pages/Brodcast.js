import Header from "../components/header";
import Navbar from "../components/Navbar";
import Onboarding from "../components/Onboadring";

function Brodcast(){
    return(
        <section className="brodcast">
            <Header/>
            <div className="pin"> <img className="icon" src="https://cdn3.iconfinder.com/data/icons/map-navigation-8/512/location-pin-coordinate-point-64.png" alt="pin" /></div>
            <div className="bigCircle"></div>
            <Onboarding 
                icon="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-64.png"
                link="/Onboarding2"
                linkText="Cancel"
                image="https://cdn0.iconfinder.com/data/icons/medical-set-2-filled-outline/128/Medical_Kit_2_-_Filled_Outline_-_22-20-64.png"
                first="Keep Yourself Safe"
                second="Help is on it's way!"
            />
            <Navbar/>
        </section>
    )
}
export default Brodcast;

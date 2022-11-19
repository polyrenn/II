import Lines from "../components/Lines";
import Onboarding from "../components/Onboadring";
import Link from "next/link";
import Topguy from "../components/Topguy";
import Header from "../components/header";
import Navbar from "../components/Navbar";

function Main(){
    return(
        <section className="mainPage">
        <Header/>
        <div className="container">
            <Topguy
                first= "Hello, Anthony"
                second= "Remain Vigilant, be safe!"
                image= "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-64.png"
            />
            <div className="location">
                <p>Your location is currently being shared with your network.</p>
                <button>Stop sharing</button>
            </div>
            <div className="reportSomething">
                <p className="something">Report Something</p>
                <div className="lineCase">
                    <Lines 
                        icon= 'https://img.icons8.com/fluency/2x/siren.png'
                        title="Random Emergency"
                    />
                    <Lines 
                        icon= 'https://img.icons8.com/external-filled-outline-wichaiwi/2x/external-robbery-gamefi-filled-outline-wichaiwi.png'
                        title="Robbery"
                    />
                    <Lines 
                        icon= 'https://img.icons8.com/color/2x/physical-abuse.png'
                        title="Assault"
                    />
                    <Lines 
                        icon= 'https://img.icons8.com/office/2x/fire-element.png'
                        title="Terrorism"
                    />
                </div>
                <Link href="/Dangers" legacyBehavior>
                    <p className="seeMore">See more...</p>
                </Link>
            </div>
            <Onboarding 
                link="/Brodcast"
                linkText="Panic!"
                image=""
                icon="https://cdn1.iconfinder.com/data/icons/emoji-of-smiley-color/100/smiley_panic-64.png"
                first="In Immediate Danger?"
                second="Use this!"
            />
        </div>
        <Navbar/>
        </section>
    )
}
export default Main;
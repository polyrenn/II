import Lines from "../components/Lines";
import Onboarding from "../components/Onboadring";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/Navbar";
import Modal1 from "../components/Modal1";
import Modal2 from "../components/Modal2";

function Main(){
    return(
        <section className="mainPage">
        <Header/>
        <div className="container">
            <div className="helloPink">
                <div className="daisy">
                    <p>Hello, Anthony</p>
                    <p>Remain Vigilant, be safe!</p>
                </div>
                <div className="emoji">
                    <img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-64.png" alt="icon" className="icon" />
                </div>
            </div>
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
                link=""
                linkText="Panic!"
                image=""
                icon="https://cdn1.iconfinder.com/data/icons/emoji-of-smiley-color/100/smiley_panic-64.png"
                first="In Immediate Danger?"
                second="Use this!"
            />
        </div>
        {/* <Modal1/> */}
        {/* <Modal2/> */}
        <Navbar/>
        </section>
    )
}
export default Main;
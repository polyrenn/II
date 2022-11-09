import Identity from "../components/Identity";
import Header from "../components/header";
import Link from "next/link";

function Check(){
    return(
        <div className="check">
        <Header/>
        <div className="container">
            <p className="who">I'm a</p>
            <p className="info"> Let's get your info</p>
            <div className="display">
                <div className="up">
                    <Identity
                        image="https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/police-black-male-coronavirus-64.png"
                        alt="Security"
                        text="Verified Law Enforcement"
                        status="A Registered Member of the Police Force or Regional Army"
                    />
                    <Identity
                        image="https://cdn3.iconfinder.com/data/icons/people-emoji/50/Ninja-64.png"
                        alt="Both"
                        text="Vigilante"
                        status="A security personnel in your Local district however not officially recognized by the Nigerian Government."
                    />
                    <Identity
                        image="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-64.png"
                        alt="Citizen"
                        text="Civilian"
                        status="A Civilian not belonging to any type of security group"
                    />
                </div>
                <Link href="/Welcome" legacyBehavior>
                <div className="button">
                    <p>Next</p>
                </div>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default Check;
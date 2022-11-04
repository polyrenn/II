import Identity from "../components/Identity";

function Check(){
    return(
        <div className="check">
            <p className="who">Who are You?</p>
            <div className="display">
                <div className="up">
                    <Identity
                        image="https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/police-black-male-coronavirus-64.png"
                        alt="Security"
                        text="Security Personnel"
                        status="Verified"
                    />
                    <Identity
                        image="https://cdn3.iconfinder.com/data/icons/people-emoji/50/Ninja-64.png"
                        alt="Both"
                        text="Security Personnel"
                        status="Unverified"
                    />
                    <Identity
                        image="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-64.png"
                        alt="Citizen"
                        text="Security Personnel"
                        status="Not A"
                    />
                </div>
            </div>
        </div>
    )
}
export default Check;
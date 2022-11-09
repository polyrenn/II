import Header from "../components/header";

function Civilian(){
    return(
        <div className="law">
            <Header/>
            <div className="container">
            <div className="lawText">
                <p>Set up account</p>
                <p>Let's get your info</p>
            </div>
            <form action="">
                <div className="in">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="in">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="in">
                    <label>Username</label>
                    <input type="text" placeholder="@username" />
                </div>
                
                <div type="submit" className="button">
                    <p>Next</p>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Civilian;
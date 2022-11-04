function Report(){
    return(
        <section className="report">
            <h1>Logo</h1>
            <div className="question">Are you reporting a <span>Crime</span> or an <span>Emergency?</span></div>
            <div className="centralize">
                <img className="show" src="https://cdn.pixabay.com/photo/2013/07/12/18/09/help-153094__340.png" alt="help" />
            </div>
            <div className="emeButtons">
                <div>
                    <p>Report Crime</p>
                </div>
                <div>
                    <p>Report Emergency</p>
                </div>
            </div>
        </section>
    )
}
export default Report;
import Link from 'next/link';

function Report(props){
    return(
        <section className="report">
           <div className="relative">
            <img onClick={props.close} className="cancel" src="../static/x.svg"/>
            <div className="title">
                <p>Report a <span>{props.display}</span> case?</p>
                <p className="direct">Click the 'HELP' button below !</p>
            </div>
            <Link href="/Brodcast" legacyBehavior>
                <img className="show" src="https://cdn.pixabay.com/photo/2013/07/12/18/09/help-153094__340.png" alt="help" />
            </Link>
            </div>
        </section>
    )
}
export default Report;
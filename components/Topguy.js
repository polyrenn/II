function Topguy(props){
    return(
        <div className="helloPink">
            <div className="daisy">
                <p>{props.first}</p>
                <div className="two">
                    <img className="icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/location-64.png" alt="pin" />
                    <p>{props.second}</p>
                </div>
            </div>
            <div className="emoji">
                <img src={props.image} alt="icon" className="icon" />
            </div>
        </div>
    )
}
export default Topguy;
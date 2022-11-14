function Feed_Li(props){
    return(
        <div>
            <li className="feed_li">
                <p>{props.username}</p>
                <div>
                    <p>Reported:</p>
                    <label>{props.time}</label>
                </div>
                <p>{props.emergency}</p>
            </li>
        </div>
    )
}
export default Feed_Li;
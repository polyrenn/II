function Lines(props){
    return(
        <div className="line">
            <img className="icon" src={props.icon} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}
export default Lines;
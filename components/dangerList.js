const DangerList = (props) => {
    return(
        <div>
            <li>
                <div>
                    <img src={props.image} alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            </li>
        </div>
    )
}
export default DangerList;
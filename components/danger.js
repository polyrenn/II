import DangerList from "./dangerList";

function Danger(props){
    return(
        <ul className="dangerList">
            {props.items.map(dangerp => <DangerList key={dangerp.id} id={dangerp.id} image={dangerp.image} title={dangerp.title}/>)}
        </ul>
    )
}
export default Danger;

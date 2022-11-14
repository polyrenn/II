import Feed_Li from "./Feeds_Li";

function FeedList(props){
    return(
        <div>
            <ul>
                {props.items.map(feedz => <Feed_Li key={feedz.id} id={feedz.id} username={feedz.username} emergency={feedz.emergency} time={feedz.time}/>)}
            </ul>
        </div>
    )
}
export default FeedList;
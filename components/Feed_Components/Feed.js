import FeedList from "./FeedList"

const DUMMY_FEED = [
    {
        id: 1,
        username: "@ashley",
        time: "18:40",
        emergency: "Violent Protest"
    },
    {
        id: 2,
        username: "@kourtney",
        time: "00:33",
        emergency: "Possible mugging"
    }
]

function Feed(){
    return(
        <div>
            <FeedList items={DUMMY_FEED}/>
        </div>
    )
}
export default Feed;
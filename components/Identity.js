import { propNames } from "@chakra-ui/react";
import Link from "next/link";

function Identity(props){
    return(
        <Link href="/Welcome" legacyBehavior>
            <div className="card">
                <img src={props.image} alt={props.alt} />
                <p><span className={props.alt}>{props.status}</span> {props.text}</p>
            </div>
        </Link>
    )
}
export default Identity;
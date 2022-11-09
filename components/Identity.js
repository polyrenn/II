import { propNames } from "@chakra-ui/react";
import Link from "next/link";

function Identity(props){
    return(
            <label htmlFor={props.alt}>
                <div className="card">
                        <img src={props.image} alt={props.alt} />
                        <p>{props.text}</p>
                        <p>{props.status}</p>
                </div>
                <div>
                    <input type="radio" name="check" id={props.alt}/>
                </div>
            </label>
    )
}
export default Identity;
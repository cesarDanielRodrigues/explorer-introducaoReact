import {Container} from "./styles"

export function TextArea(props,...rest){
    return(
        <textarea value={props.value}></textarea>
    )
}

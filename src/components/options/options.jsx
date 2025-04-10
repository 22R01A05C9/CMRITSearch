import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import "./options.css"

function Options(){
    return(
        <div className="options">
            <Year />
            <Branch />
            <Searchby />
        </div>
    )
}

export default Options;
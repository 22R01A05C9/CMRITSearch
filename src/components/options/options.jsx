import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import Input from "./input";
import { useState } from "react";
import "./options.css"

function Options() {
    const [searchby, setSearchby] = useState("Name");
    const [year, setYear] = useState("ALL");
    const [branch, setBranch] = useState("ALL");
    return (
        <div className="options">
            <Year year={year} set={setYear} />
            <Branch branch={branch} set={setBranch} year={year}/>
            <Searchby searchby={searchby} set={setSearchby} />
            <Input searchby={searchby} oninp={(e)=>{console.log(e);}}/>
        </div>
    )
}

export default Options;
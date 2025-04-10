import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import Input from "./input";
import { useState, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import "./options.css"

function Options() {
    const [searchby, setSearchby] = useState("Name");
    const [year, setYear] = useState("ALL");
    const [branch, setBranch] = useState("ALL");
    const inputRef = useRef(null);
    const getdata = debounce((e, searchby, branch, year, page) => {
        console.log(e.value, searchby, branch, year, page);
    }, 500);
    useEffect(()=>{
        if(year==="2023") setBranch("ALL")
    },[year])
    useEffect(()=>{
        getdata(inputRef.current, searchby, branch, year, 1)
    },[searchby, branch, year])
    return (
        <div className="options">
            <Year year={year} set={setYear} />
            <Branch branch={branch} set={setBranch} year={year}/>
            <Searchby searchby={searchby} set={setSearchby} />
            <Input ref={inputRef} searchby={searchby} oninp={()=>{getdata(inputRef.current, searchby, branch, year, 1)}}/>
        </div>
    )
}

export default Options;
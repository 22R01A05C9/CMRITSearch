import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import Input from "./input";
import { useEffect } from "react";
import getdata from "../../helpers/getdata";
import "./options.css"

function Options({ searchby, branch, year, setdata, inputRef, setYear, setBranch, setSearchby }) {
    
    useEffect(() => {
        if (year === "2023") setBranch("ALL")
    }, [year])
    useEffect(() => {
        getdata(inputRef.current, searchby, branch, year, 1, setdata)
    }, [branch, year, searchby])
    return (
        <div className="options">
            <Year year={year} set={setYear} />
            <Branch branch={branch} set={setBranch} year={year} />
            <Searchby searchby={searchby} set={setSearchby} />
            <Input ref={inputRef} searchby={searchby} oninp={() => { getdata(inputRef.current, searchby, branch, year, 1, setdata) }} />
        </div>
    )
}

export default Options;
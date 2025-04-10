import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import Input from "./input";
import { useState, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import "./options.css"

function Options({ setdata }) {
    const [searchby, setSearchby] = useState("Name");
    const [year, setYear] = useState("ALL");
    const [branch, setBranch] = useState("ALL");
    const inputRef = useRef(null);
    const getdata = debounce((e, searchby, branch, year, page) => {
        if (e.value.trim() === "") return
        let data = {
            searchby: searchby,
            branch: branch,
            year: year,
            page: page
        }
        if(searchby === "Name"){    
            data.name = e.value
        }else if(searchby === "Roll"){
            data.roll = e.value
        }
        fetch("/api/cmr/getdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            setdata(data)
        })
    }, 500);
    useEffect(() => {
        if (year === "2023") setBranch("ALL")
    }, [year])
    useEffect(() => {
        getdata(inputRef.current, searchby, branch, year, 1)
    }, [branch, year])
    return (
        <div className="options">
            <Year year={year} set={setYear} />
            <Branch branch={branch} set={setBranch} year={year} />
            <Searchby searchby={searchby} set={setSearchby} />
            <Input ref={inputRef} searchby={searchby} oninp={() => { getdata(inputRef.current, searchby, branch, year, 1) }} />
        </div>
    )
}

export default Options;
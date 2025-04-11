import Searchby from "./searchby";
import Year from "./year";
import Branch from "./branch";
import Input from "./input";
import { useEffect } from "react";
import { debounce } from "lodash";
import "./options.css"

function Options({ searchby, branch, year, setdata, inputRef, setYear, setBranch, setSearchby, setShowload }) {
    const getdata = debounce((e, searchby, branch, year, page, setdata, setShowload) => {
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
            if(data.error) {
                toast.error(data.message)
                return
            }
            setdata(data.data)
            setShowload(data.length === 10)
        })
    }, 500);
    useEffect(() => {
        if (year === "2023") setBranch("ALL")
    }, [year])
    useEffect(() => {
        getdata(inputRef.current, searchby, branch, year, 1, setdata, setShowload)
    }, [branch, year, searchby])
    return (
        <div className="options">
            <Year year={year} set={setYear} />
            <Branch branch={branch} set={setBranch} year={year} />
            <Searchby searchby={searchby} set={setSearchby} />
            <Input ref={inputRef} searchby={searchby} oninp={() => { getdata(inputRef.current, searchby, branch, year, 1, setdata, setShowload) }} />
        </div>
    )
}

export default Options;
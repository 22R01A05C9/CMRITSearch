import Header from "../header/header";
import Options from "../options/options";
import Output from "../output/output";
import { useState, useRef } from "react";
import "./main.css"

function Main() {
    const [data, setData] = useState(null);
    const [searchby, setSearchby] = useState("Name");
    const [year, setYear] = useState("ALL");
    const [branch, setBranch] = useState("ALL");
    const [showload, setShowload] = useState(true);
    const inputRef = useRef(null);
    const loadmore = () => {
        let payloaddata = {
            searchby: searchby,
            branch: branch,
            year: year,
            page: Math.ceil(data?.length / 10) + 1
        }
        if (searchby === "Name") {
            payloaddata.name = inputRef.current.value
        } else if (searchby === "Roll") {
            payloaddata.roll =  inputRef.current.value
        }
        fetch("/api/cmr/getdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payloaddata)
        }).then(res => res.json()).then(res => {
            if(res.error){
                toast.error(res.message) 
                return
            }
            setData((data) => [...data, ...res.data])
            setShowload(res.length === 10)
        })
    }


    return (
        <div className="cmritsearch">
            <Header />
            <div className="main">
                <Options setdata={setData} searchby={searchby} branch={branch} year={year} inputRef={inputRef} setYear={setYear} setBranch={setBranch} setSearchby={setSearchby} setShowload={setShowload}/>
                {data && <Output data={data} loadmore={loadmore} showload={showload}/>}
            </div>
        </div>
    );
}

export default Main;
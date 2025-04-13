import Header from "../header/header";
import Options from "../options/options";
import Output from "../output/output";
import { useState, useRef } from "react";
import getdata from "../../helper/getdata";
import "./main.css"

function Main() {
    const [data, setData] = useState(null);
    const [searchby, setSearchby] = useState("Name");
    const [year, setYear] = useState("ALL");
    const [branch, setBranch] = useState("ALL");
    const [showload, setShowload] = useState(true);
    const inputRef = useRef(null);
    const loadmore = (done) => {
        getdata(inputRef.current, searchby, branch, year, Math.ceil(data?.length / 10) + 1, setData, setShowload, true, done)
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
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
    const inputRef = useRef(null);
    return (
        <div className="cmritsearch">
            <Header />
            <div className="main">
                <Options setdata={setData} searchby={searchby} branch={branch} year={year} inputRef={inputRef} setYear={setYear} setBranch={setBranch} setSearchby={setSearchby}/>
                {data && <Output data={data} />}
            </div>
        </div>
    );
}

export default Main;
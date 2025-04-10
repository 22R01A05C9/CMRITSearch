import Header from "../header/header";
import Options from "../options/options";
import { useEffect, useState } from "react";
import "./main.css"

function Main(){
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log(data);
    },[data])
    return (
        <div className="cmritsearch">
            <Header />
            <div className="main">
                <h3>Please fill/select the below details</h3>
                <Options setdata={setData}/>
            </div>
        </div>
    );
}

export default Main;
import "./output.css"
import Card from "./card";
import Loading from "../loading/loading"
import { useState, useEffect } from "react";
function Output({ data }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [data]);

    return (
        <div className="output">
            {loading ? <Loading /> :
                <div className="students">
                    {   data && !data.error? 
                        data.data.map((item, index) => {
                            return <Card key={index} data={item} />
                        }) : 
                        <p>No Data Found</p>
                    }
                </div>
            }
            {!loading }
        </div>
    )
}

export default Output;
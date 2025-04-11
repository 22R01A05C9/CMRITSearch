import "./output.css"
import Card from "./card";
import Loading from "../loading/loading"
import { useState } from "react";

function Output({ data, loadmore, showload }) {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);

    return (
        <div className="output">
            {loading ? <Loading /> :
                data && data.length >= 1 ?
                    <>
                        <div className="students">
                            {data.map((item, index) => {
                                return <Card key={index} data={item} />
                            })}
                        </div>
                        {showload && <button onClick={loadmore}>Load More</button>}
                    </> :
                    <p>No Data Found</p>

            }
        </div>
    )
}

export default Output;
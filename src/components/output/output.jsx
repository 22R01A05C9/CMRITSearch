import "./output.css"
import Card from "./card";
import Loading from "../loading/loading"
import { useState, useRef } from "react";

function Output({ data, loadmore, showload }) {
    const buttonRef = useRef(null);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);
    const done = () => {
        buttonRef.current.classList.remove("loadmore");
    }

    const loadmorew = () => {
        buttonRef.current.classList.add("loadmore")
        loadmore(done);
    }

    return (
        <div className="output">
            {loading ? <Loading /> :
                data && data.length >= 1 ?
                    <>
                        <div className="students">
                            {data.map((item) => {
                                return <Card key={crypto.randomUUID()} data={item} />
                            })}
                        </div>
                        {showload && <button ref={buttonRef} onClick={loadmorew}><span>Load More</span></button>}
                    </> :
                    <p>No Data Found</p>

            }
        </div>
    )
}

export default Output;
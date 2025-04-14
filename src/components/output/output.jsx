import "./output.css"
import Card from "./card";
import Loading from "../loading/loading"
import Scroll from "../scroll/scroll";
import { useEffect, useRef } from "react";

function Output({ data, loadmore, showload, loading }) {
    const buttonRef = useRef(null);
    const done = () => {
        buttonRef.current.classList.remove("loadmore");
    }

    const loadmorew = () => {
        buttonRef.current.classList.add("loadmore")
        loadmore(done);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && showload && !loading) {
                loadmorew();
            }
        }, { threshold: 1 });
    
        observer.observe(buttonRef.current);
        return () => {
            observer.disconnect();
        }
    }, [data,loading])
    return (
        <div className="output">
            {loading ? <Loading /> :
                data && data.length >= 1 ?
                    <>
                        <div className="students">
                            {
                                data.map((item) => {
                                    return <Card key={item.key} data={item} />
                                })
                            }
                        </div>
                    </> :
                    <p>No Data Found</p>
            }
            <span ref={buttonRef}></span>
            <Scroll />
        </div>
    )
}

export default Output;
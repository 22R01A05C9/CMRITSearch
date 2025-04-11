import { debounce } from "lodash";
import { toast } from "react-toastify";
const getdata = debounce((e, searchby, branch, year, page, setdata, setShowload, append) => {
    let pdata = {
        searchby: searchby,
        branch: branch,
        year: year,
        page: page
    }
    if(searchby === "Name"){    
        pdata.name = e.value
    }else if(searchby === "Roll"){
        pdata.roll = e.value
    }
    fetch("/api/cmr/getdata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pdata)
    }).then(res => res.json()).then(res => {
        if(res.error) {
            toast.error(res.message)
            return
        }
        if(append){
            setdata((data)=>{return (data ?  [...data,...res.data] : res.data)})
        }else{
            setdata(res.data)
        }
        setShowload(res.length === 10)
    })
}, 500);

export default getdata;
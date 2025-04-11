import debounce  from "lodash/debounce";
import { toast } from "react-toastify";
const getdata = debounce((e, searchby, branch, year, page, setdata) => {
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
        data.error ? toast.error(data.message) : setdata(data)
    })
}, 500);

export default getdata;
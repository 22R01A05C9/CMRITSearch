import { debounce } from "lodash";
const getdata = debounce((e, searchby, branch, year, page, setdata, setShowload, append, done=null) => {
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
            alert(res.message)
            return
        }
        if(append){
            setdata((data)=>{return (data ?  [...data,...res.data] : res.data)})
        }else{
            setdata(res.data)
        }
        setShowload(res.length === 10)
        if(done){
            done()
        }
    })
}, 500);

export default getdata;
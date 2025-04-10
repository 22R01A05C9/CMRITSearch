import Option from "../option/option";

function Searchby() {
    return (
        <div className="searchby">
            <p>Search By: </p>
            <div className="showoptions">
                <Option option={"Name"} active={true} onclick={(e) => { console.log(e); }} />
                <Option option={"Roll"} active={false} onclick={(e) => { console.log(e); }} />
            </div>
        </div>
    )
}

export default Searchby;
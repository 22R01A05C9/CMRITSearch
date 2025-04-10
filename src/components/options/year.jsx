import Option from "../option/option";

function Year() {
    return (
        <div className="year">
            <p>Slect Year:</p>
            <div className="showoptions">
                <Option option="ALL" active={true} onclick={(e) => { console.log(e); }} />
                <Option option="2022" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="2023" active={false} onclick={(e) => { console.log(e); }} />
            </div>
        </div >
    )
}

export default Year;
import Option from "../option/option";

function Branch() {
    return (
        <div className="branch">
            <p>Slect Branch:</p>
            <div className="showoptions">
                <Option option="ALL" active={true} onclick={(e) => { console.log(e); }} />
                <Option option="CSE" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="ECE" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="CSM" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="CSD" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="CSC" active={false} onclick={(e) => { console.log(e); }} />
                <Option option="AIML" active={false} onclick={(e) => { console.log(e); }} />
            </div>
        </div>
    )
}

export default Branch;
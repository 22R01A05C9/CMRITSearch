import Header from "../header/header";
import Options from "../options/options";
import "./main.css"

function Main(){

    return (
        <div className="cmritsearch">
            <Header />
            <div className="main">
                <h3>Please fill/select the below details</h3>
                <Options />
            </div>
        </div>
    );
}

export default Main;
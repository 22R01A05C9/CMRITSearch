function Input({oninp, searchby}){
    return(
        <div className="input">
            <input type="text" placeholder={"Enter " + searchby} onInput={oninp} name={searchby} autoComplete={searchby}/>
        </div>
    )

}

export default Input;
function Card({data}){
    return(
        <div className="card">
            <img src={`https://cmrstatic.saiteja.site/${data.roll}.jpg`} alt="Student Image" />
            <div className="info">
                <h4>{data.name}</h4>
                <p><strong>Roll No:</strong> {data.roll}</p>
                <p><strong>Branch:</strong> {data.branch}</p>
                <p><strong>Year:</strong> {data.year}</p>
            </div>
        </div>
    )
}

export default Card;

let VideoCard=(props)=>{
    let movie=props.data;
    return (
        <div className="Card" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
        </div>
    )
}

export default VideoCard;
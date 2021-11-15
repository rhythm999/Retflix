import VideoCard from "./VideoCard"

let Row=(props)=>{
    let movie=props.data.results;
    return(
        <div className="row_container">
            <h2 className="Title">{props.title}</h2>
            <div className="row_container_inner">
            {movie.map((title,index)=>{
                return <VideoCard data={title} index={index}></VideoCard>
            })}
            </div>
        </div>
    )
}

export default Row;
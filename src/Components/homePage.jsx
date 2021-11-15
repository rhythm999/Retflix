import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../AuthProvider"
import { auth } from "../firebase"

import Row from "./Row"


import "../CSS/homePage.css"
import { Link } from "react-router-dom";


let HomePage = () => {
    let value = useContext(AuthContext);
    let [data, setData] = useState([]);
    let [scroll,setScroll]=useState([true]);

    let transition=()=>{
        if(window.scrollY>100){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transition);
        return()=> window.removeEventListener("scroll",transition);
    },[])



    let title=["Netflix Original","Trending Now","Top Rated","Action Movies","Comedy Movies","Horror Movies","Romance Movies","Documentry"]
    let movie = "/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg";
    
    useEffect(() => {
        let p1 = fetch("https://api.themoviedb.org/3/trending/all/week?api_key=70ff698d1b1501dde3edd28562e31a37&language=en-US");
        let p2 = fetch("https://api.themoviedb.org/3/discover/tv?api_key=70ff698d1b1501dde3edd28562e31a37&with_network=213");
        let p3 = fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=70ff698d1b1501dde3edd28562e31a37&language=en-US");
        let p4 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=70ff698d1b1501dde3edd28562e31a37&with_genres=28");
        let p5 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=70ff698d1b1501dde3edd28562e31a37&with_genres=35");
        let p6 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=70ff698d1b1501dde3edd28562e31a37&with_genres=27");
        let p7 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=70ff698d1b1501dde3edd28562e31a37&with_genres=10749");
        let p8 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=70ff698d1b1501dde3edd28562e31a37&with_genres=99");

        Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
            .then((responses) => {
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            })
            .then((json) => {
                setData(json);
                console.log(100);
            })
        }, [])
        if (data.length > 0) {
            let temp = Math.floor(Math.random() * (data[Math.floor(Math.random()*(data.length-1))].results.length - 1));
            movie = data[Math.floor(Math.random()*(data.length-1))].results[temp];
        }
        console.log(movie);
    

    return (
        <div>
            {
                value
                    ?
                    (
                        <div className="Page">
                            <nav class={`navbar px-4 ${scroll ?"": "transparent" }`}>
                                <a class="navbar-brand" id="Retflix">RETFLIX</a>
                                <h1 className="tvShows">Tv Shows</h1>
                                <h1 className="movies">Movies</h1>
                                <h1 className="recentlyAdded">Recently Added</h1>
                                
                                <Link to="/avatar">
                                    <img className="avatar_banner" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
                                </Link>
                            </nav>
                            <div className="mainBanner" style={{
                                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
                            }}>
                            </div>
                            <div className="banner_content">
                                <h1 className="banner_title">{movie.title}</h1>
                                <div className="banner_btns">
                                    <button className="banner_btn play">Play</button>
                                    <button className="banner_btn list">My List</button>
                                </div>
                            </div>
                            <h1 className="banner_description">{movie.overview}</h1>
                                {data.map((table,index) => {
                                    return <Row data={table} title={title[index]}></Row>
                                })}
                        </div>)
                    :
                    (<Redirect to="/login"></Redirect>)
            }
        </div>
    )
}

export default HomePage;
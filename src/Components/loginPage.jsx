import { Link, Redirect } from "react-router-dom";
import "../CSS/loginPage.css"
import { AuthContext } from "../AuthProvider";
import { useContext } from "react"
import {useEffect,useState} from "react";



let LoginPage = () => {
    let value = useContext(AuthContext);
    let [scroll,setScroll]=useState([true]);
    let transition=()=>{
        if(window.scrollY>200){
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

    return (
        <div>
            {value ?
                (<Redirect to="/homePage"></Redirect>)
                :
                (<div>
                    <nav class={`navbar px-4 ${scroll ?"": "transparent" }`}>
                        <a class="navbar-brand" id="Retflix">RETFLIX</a>
                        <Link to="/login">
                            <button class="btn  SignIn" >Sign In</button>
                        </Link>
                    </nav>
                    <div className="getStarted">
                        <div className="detailContainer">
                            <h1 className="head">Unlimited movies, TV shows and more.</h1>
                            <h2 className="head2">Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div class="input-group mb-3">
                                <input class="form-control" placeholder="Email Address" />
                                <Link to="/login">
                                    <span class="input-group-text ">Get Started </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="posterTwo">
                        <Link to="/login">
                            <span class="material-icons play_btn">play_circle</span>
                        </Link>
                        <div className="detailContainer2">
                            <h1>Enjoy on your TV.</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more..</h2>
                        </div>
                    </div>
                    <div className="posterThree">
                        <Link to="/login">
                            <span class="material-icons play_btn">play_circle</span>
                        </Link>
                        <div className="detailContainer3">
                            <h1>Download your shows to watch offline.</h1>
                            <h2>Save your favourites easily and always have something to watch.</h2>
                        </div>
                    </div>
                    <div className="contactInfo">
                        <div className="detailContact">
                            <div class="input-group mb-3">
                                <input class="form-control" placeholder="Email Address" />
                                <span class="input-group-text ">Get Started </span>
                            </div>
                            <h3>Questions? Call 6666-7777-8888-9999</h3>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <h3>Retflix India.</h3>
                        </div>
                        <a class="navbar-brand p-1" id="Retflix">RETFLIX</a>
                    </div>
                </div>)
            }
        </div>
    )
}

export default LoginPage;
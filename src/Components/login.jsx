import { signInWithGoogle } from '../firebase';
import  {AuthContext}  from "../AuthProvider"
import { Redirect } from "react-router-dom";
import "../CSS/login.css"
import { useContext } from "react";

let Login = () => {
    let value=useContext(AuthContext);
    return (
        <div>
            {value ?
                (<Redirect to="/avatar" />)
                :
                (
                    <div>
                        <nav class="navbar px-4">
                            <a class="navbar-brand" id="Retflix">RETFLIX</a>
                        </nav>
                        <div className="poster">

                            <div className="loginBox">
                                <div class="more">Direct Methods</div>
                                <div className="sources">
                                    <div class="GoogleLogin" onClick={signInWithGoogle} ></div>
                                </div>
                                <hr class="rounded" />
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" placeholder="Enter Your Password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary mx-1">Sign In</button>
                                    <button type="submit" class="btn btn-primary ">Register New Account </button>
                                </form>
                            </div>
                        </div>
                        <div className="contactInfo">
                            <div className="detailContact">
                                <h1>Unlimited movies, TV shows and more.</h1>
                                <h2>Watch anywhere. Cancel anytime.</h2>
                                <h3>Questions? Call 6666-7777-8888-9999</h3>
                                <h3>Retflix India.</h3>
                            </div>
                            <a class="navbar-brand p-1" id="Retflix">RETFLIX</a>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Login;
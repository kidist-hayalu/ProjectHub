import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Login() {

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notPassword, setNotPassword] = useState(false);

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    useEffect(() => {
        wrongPassword(email, password);
    }, [email, password]);

    function wrongPassword(email, password) {

        if (email === "" || password === "")
            setNotPassword(true);
        else
            setNotPassword(false);
    }


    return (
        <div className="h-screen w-full bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900 flex justify-center items-center">
            <div className="flex flex-row items-center justify-center bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-600 w-3/5 h-3/5 rounded-md shadow-lg">
                <div className="w-2/5 flex items-center ">
                    <p className="px-12 ">Login to continue from where you've stopped or create an account to explore</p>
                </div>
                <div className="w-3/5 h-full flex flex-col items-center justify-center py-14 pl-14 bg-gradient-to-bl from-slate-200 via-slate-300 to-slate-400 [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] rounded-md">

                    <div className="mb-2 px-8 flex flex-col items-center justify-center">
                            <div>
                                <input type="text" value={email} onChange={changeEmail} placeholder="Enter your Email" className="my-2 border-solid border-black w-5/6 px-2 rounded" />
                                <input type="password" value={password} onChange={changePassword} placeholder="Enter Password" className="my-2 border-solid border-black w-5/6 px-2 rounded" />

                            </div>
                            <div className="flex flex-col items-center justify-center my-3">
                                <Link to={'/Dashboard'}>
                                    <button className="mb-2" onClick={(e) => { e.preventDefault(); /*wrongPassword(email, password);*/ }}>Login</button>
                                </Link>

                                {notPassword && 
                                (<> 
                                    <p className="text-red-500">Incorrect email or password</p>
                                    <Link to="/ForgotPassword" className="mb-2">Forgot Password?</Link> 
                                </>)}

                                <Link to="/SignIn" className="mb-2">Sign In</Link>

                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
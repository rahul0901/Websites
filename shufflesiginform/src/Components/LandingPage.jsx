import { useState } from 'react';
import './LandingPage.css';
import './MediaLandingPage.css'

const LandingPage = () =>{
    const [signin, setSignin] = useState(true);

    const handleSignin = () =>{
        setSignin(false);
    }
    return(
        <>
            <div className="screen-landing">
                <div className="child">
                    {signin ? <>
                        <div className="signin-parent">
                            <div className="signin-box">
                                sign-in
                            </div> 
                            <div className="cover-signup">
                                <h2>Welcome to Website</h2>
                                <p>Create Account?</p>
                                <a onClick={handleSignin}>Signup Here</a>
                            </div>
                        </div>
                        </> : <>
                        <div className="signup-parent">
                            <div className="cover-signin">
                                <h2>Login if you already have Account</h2>
                                <a onClick={()=>setSignin(true)}>Sigin Here</a>
                            </div>
                            <div className="signup-box">
                                sign-up
                            </div>
                        </div>
                    
                    </>
                    }                  
                </div>
            </div>
        </>
    )
};





export default LandingPage;
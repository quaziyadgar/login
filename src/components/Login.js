

const Login = ()=>{
    

    return(
        <div>
            <div className="container">
                <div className="signIn">
                    <span className="label"><p>Company</p>Name</span>
                    <article className="title">Sign in to Account</article>
                    <div className="underline"></div>
                    <div className="socialMedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                        <i class="fa fa-google-plus"></i>
                    </div>
                    <p>or use your email account</p>
                    <div className="inputLogin">
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <span>
                            <input type="checkbox"/><p className="leftInp">Remember me</p><p className="rightInp">Forgot Password?</p>
                        </span>
                        <button>Sign In</button>
                    </div>
                    <div className="footer" >
                        <pre>Privacy Policy    <em>•</em>     Terms & Conditions</pre>
                    </div>
                </div>
                <div className="signUp">
                    <div className="intro-title">Hello, Friends!</div>
                    <div className="underline2"></div>
                    <div className="intro">
                        <p>Fill up personal information and start journey with us</p>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Login;
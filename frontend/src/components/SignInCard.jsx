import '../index.css'


const SignInCard = () => {
    
    return(
        <>
            <div className="mx-auto card">
                <div className="flex font-medium w-525 h-10 head-h">
                    <div className="text-lime-900 mx-auto my-auto"><p>Sign In/Log in</p></div>
                    <button className="relative bg-slate-400 inset-y-0 right-0 w-16">X</button>
                </div>
                <div className="w-fit bg-slate-200 mx-auto mt-11 mb-14 text-xl font-semibold">
                    <h1>Welcome to<span className="primary text-white px-1 rounded">Stallion Notes</span></h1>
                </div>
                <div className="w-48 mx-auto mt-11 mb-14">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="btn-login">
                    <button className="btn-login">Login</button>
                    <span>Need an account?</span><a href="#">Register here</a>
                </div>
                <div className="break">
                    <p>----------- or -------------</p>
                    <p>sign up with</p>
                </div>

                <div className="google">
                    <button className="google"><span>X</span>Continue with Google</button>
                </div>
                <div className="facebook">
                    <button className="facebook"><span>X</span>Continue with Moodle</button>
                </div>
            </div>
        </>
    )
}

export default SignInCard
import Onboarding from "../components/Onboadring";

const Welcome = ()=>{
    return(
        <section className="welcome">
            <div>
                <Onboarding 
                    link=""
                    icon="https://cdn0.iconfinder.com/data/icons/brands-colored-2/209/apple-social-network-brand-logo-64.png"
                    linkText="Continue with Apple"
                    image="https://cdn.pixabay.com/photo/2018/03/27/12/57/silhouette-3265909__340.png"
                    first="Welcome"
                    second="Sign in to continue"
                />
                <div className='buttonB'>
                    <img className='icon' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="icon"/>
                    <a>Continue with google</a>
                </div>
            </div>
            <div className="createA">
                <p>New User? <span>Create account</span></p>
            </div>
        </section>
    )
}
export default Welcome;
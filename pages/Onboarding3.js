import Onboarding from "../components/Onboadring";
import Link from 'next/link';

const Onboarding3 = ()=>{
    return(
        <section>
            <Onboarding 
                icon="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_054_right_arrow_next_foward_follow_link-64.png"
                link="/Check"
                linkText="Get Started"
                image="https://cdn.pixabay.com/photo/2014/03/25/16/35/megaphone-297467__340.png"
                first="Alert & Assist"
                second="Not only can you help people with you, you can help people around you and warn them of cases within your area so they can avoid it or seek help."
            />
            <div className='circularDots'>
                <Link href="/Onboarding1" legacyBehavior>
                <div/>
                </Link>
                <Link href="/Onboarding2" legacyBehavior>
                <div/>
                </Link>
                <Link href="/Onboarding3" legacyBehavior>
                <div className="active"/>
                </Link>
            </div>
        </section>
    )
}
export default Onboarding3;
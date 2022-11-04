import Onboarding from "../components/Onboadring";
import Link from 'next/link';

const Onboarding1 = ()=>{
    return(
        <section>
            <Onboarding 
                icon="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_054_right_arrow_next_foward_follow_link-64.png"
                link="/Onboarding2"
                linkText="Next"
                image="https://cdn.pixabay.com/photo/2012/04/13/11/06/shield-31869__340.png"
                first="Keep Yourself Safe"
                second="Have you ever been in a situation where you felt scared or in danger and you couldn't get help? This app connects you with people around you and Security personnels that'll come to your aid."
            />
            <div className='circularDots'>
                <Link href="/Onboarding1" legacyBehavior>
                <div className="active"/>
                </Link>
                <Link href="/Onboarding2" legacyBehavior>
                <div/>
                </Link>
                <Link href="/Onboarding3" legacyBehavior>
                <div/>
                </Link>
            </div>
        </section>
    )
}
export default Onboarding1;
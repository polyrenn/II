import Onboarding from "../components/Onboadring";
import Link from 'next/link';

const Onboarding2 = ()=>{
    return(
        <section>
            <Onboarding 
                icon="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_054_right_arrow_next_foward_follow_link-64.png"
                link="/Onboarding3"
                linkText="Next"
                image="https://cdn.pixabay.com/photo/2017/08/15/12/04/helping-each-other-2643652__340.jpg"
                first="Keep Others Safe"
                second="Most times when there's an emergency, the first reaction of people is to start recording for the media. This app helps you get help people who need it by sending a distress signal, use this app instead of a camera."
            />
            <div className='circularDots'>
                <Link href="/Onboarding1" legacyBehavior>
                <div/>
                </Link>
                <Link href="/Onboarding2" legacyBehavior>
                <div className="active"/>
                </Link>
                <Link href="/Onboarding3" legacyBehavior>
                <div/>
                </Link>
            </div>
        </section>
    )
}
export default Onboarding2;
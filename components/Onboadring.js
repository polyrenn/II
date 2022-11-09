import Link from 'next/link';
import Header from './header';

const Onboarding = (props)=>{
    return(
        <section className='onboarding'>
            <Header/>
            <div className='space'>
                
            </div>
            <div>
                <img className='show' src={props.image} alt={props.first} />
            </div>
            <div className="forBrodcast">
                <div className='writingsA'>
                    <p>{props.first}</p>
                    <p>{props.second}</p>
                </div>
                <Link href={props.link} legacyBehavior>
                <div className='button'>
                    <img className='icon' src={props.icon} alt="icon"/>
                    <a>{props.linkText}</a>
                </div>
                </Link>
            </div>
        </section>
    )
}
export default Onboarding;
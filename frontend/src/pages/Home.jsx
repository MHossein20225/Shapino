import heroSection from "../assets/images/heroSection.png"
import {Link} from "react-router-dom";
function Home() {
    return (
        <>
            <section className="w-full mt-4">
                <div className="flex items-center max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md)">
                    <Link to=''><img className='w-full h-full' src={heroSection} alt=""/></Link>
                </div>
            </section>

        </>
    )
}

export default Home
import Banner from './Banner';
import Services from './Services';

const About = () => {
    return (
        <div className="w-full min-h-[50vh] px-28 py-7">
            <Banner />
            <Services about={true} />
        </div>
    );
}

export default About;

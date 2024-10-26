import Banner from './Banner';
import Gallery from './Gallery';
import Services from './Services';

const About = () => {
    return (
        <div className="w-full min-h-[50vh] px-5 md:px-10 lg:px-20 xl:px-28 lg:pb-10 py-7">
            <Banner />
            <Services about={true} />
            <h2 className="text-3xl font-semibold font-serif text-black mb-10 -mt-20">
                Photo Gallery
            </h2>
            <Gallery />
        </div>
    );
}

export default About;

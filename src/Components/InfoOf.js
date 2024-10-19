import accImage from "../assets/InfoOf.jpg"
const Accomodation = () => {
    return (
        <div className="flex px-20 py-10 justify-center items-center gap-10">
            <div className="w-1/2 space-y-5">
                <h2 className="text-4xl font-serif w-[70%]">Affordable Stay in the Heart of Jaipur!</h2>
                <p className="text-sm w-[70%] font-light">Located in the heart of Jaipur, TGI Apple Inn is renowned for its affordable accommodations in a prime location. Situated close to multiple travel hubs, we are merely 1.8 km from the DCM bus stand and 2 km from Mansarovar Metro Station, ensuring a hassle-free commute to our centrally located hotel. We are also in proximity to renowned tourist attractions like Govind Devji Temple and Birla Mandir, allowing you to thoroughly enjoy the city's charm.</p>
            </div>
            <div className="w-1/2">
                <img className="w-[90%]" src={accImage}></img>
            </div>
        </div>
    );
}

export default Accomodation;

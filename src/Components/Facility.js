
const Facility = ({item}) => {
    return (
        <div className="w-[32%] relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <img className="w-full aspect-[4/3] object-cover" src={item.img} alt="In-House Bar" />
            <p className="absolute left-5 bottom-2 text-white">{item.title}</p>
        </div>
    );
}

export default Facility;


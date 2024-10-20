
const Facility = ({item}) => {
    return (
        <div className="w-[32%] relative overflow-hidden rounded-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <img className="w-full aspect-[4/3] object-cover" src={item.img} alt={item.title} />
            <p className="absolute left-5 bottom-2 text-white font-normal">{item.title}</p>
        </div>
    );
}

export default Facility;


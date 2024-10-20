
const OtherFacilities = ({item}) => {
    return (
        <div key={item.id} className="flex flex-col items-center justify-center ">
            <img className="w-28 aspect-square" src={item.img} alt={item.title} />
            <p>{item.title}</p>
        </div>
    );
}

export default OtherFacilities;

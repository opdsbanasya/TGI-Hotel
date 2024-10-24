import building from "../assets/building.jpg";
import hall from "../assets/hall.jpg";
import mainPool from "../assets/main-pool.jpg";
import buildingView from "../assets/building-view.jpg";
import dinningArea from "../assets/dinning-area.jpg";
import staff from "../assets/staff.jpg";
import infoImage from "../assets/mainEntrance.jpg";
import accImage from "../assets/acc2.jpg";
import rooftopDinning2 from "../assets/rooftopDinning2.jpg";
import rooftopDinning from "../assets/rooftopDinning.jpg";
import eventHall from "../assets/banquet_event.jpg";
import barImg from "../assets/party-area.jpg";
import poolImg from "../assets/main-pool.jpg";
import hall from "../assets/Hall.jpg";
import gym from "../assets/zym.jpg";
import parking from "../assets/parking.jpg";
import dinningArea from "../assets/dinning-area.jpg";
import wifi from "../assets/wifi.webp";
import petsBan from "../assets/banPets.webp";
import carRental from "../assets/carRental.webp";
import customerSupport from "../assets/customerSupport.webp";


export const LOGO = "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_130,h_130,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/tgi-hotels-and-resorts---3624/Image_-1_rtvdbd";

export const CAROUSEL_IMG = [
    building, hall, mainPool, buildingView, dinningArea, staff
];

export const SERVICES = [
    {
        id: 1,
        title: "Affordable Stay in the Heart of Jaipur!", 
        img: infoImage, 
        description: "Located in the heart of Jaipur, TGI Apple Inn is renowned for its affordable accommodations in a prime location. Situated close to multiple travel hubs, we are merely 1.8 km from the DCM bus stand and 2 km from Mansarovar Metro Station, ensuring a hassle-free commute to our centrally located hotel. We are also in proximity to renowned tourist attractions like Govind Devji Temple and Birla Mandir, allowing you to thoroughly enjoy the city's charm."
    },
    { 
        id: 2, 
        title: "Accommodations at TGI Apple Inn", 
        img: accImage, 
        description: "Discover comfort and style at our hotel in Jaipur, featuring five distinct room types namely, Studio, Premium, Suite, Executive and Royal Executive Room. Enjoy the refined furnishings and beautiful decor as you delve into a range of modern amenities such as complimentary Wi-Fi, television and more. Our commitment to great hospitality ensures that you feel right at home in our tidy and elegant abode." },
    { id: 3, 
        title: "Diverse Dining Options", 
        img: rooftopDinning2, 
        description: "Experience unparalleled dining at TGI Apple Inn, Jaipur. We offer two distinctive restaurants ensuring a diverse culinary journey. Our fine-dining restaurant Aroma offers lip-smacking dishes while the Roof Top restaurant at our hotel ensures you have great dining overlooking the city." },
    { 
        id: 4, 
        title: "Event Spaces for Every Occasion", 
        img: eventHall, 
        description: "Our Jaipur hotel comes with all the facilities you need for your social and professional gatherings. With two modern banquet halls that can accommodate guests of up to 200 people, we make sure your event is a success. We also have you covered for throwing parties with our Discotheque which can accommodate up to 130 guests and has a great ambience. " },
    { 
        id: 5, 
        title: "Services to Ensure a Fantastic Stay", 
        img: rooftopDinning, 
        description: "Recognised as the premier choice for newlyweds, our Jaipur hotel seamlessly blends affordability with comfort. We guarantee a cosy and unforgettable stay in the city, providing contemporary amenities like a swimming pool, a spa and a souvenir shop for thoughtful gifts. Opt for our exceptional yet affordable hotel for a memorable experience in the Pink City today." },
]

export const FACILITIES_DATA = [
    {
        id:7,
        img: dinningArea,
        title: "In-House Bar"
    },
    {
        id:8,
        img: hall,
        title: "In-House Meeting Hall"
    },
    {
        id:9,
        img: poolImg,
        title: "In-House Pool"
    },
    {
        id:10,
        img: gym,
        title: "Gym"
    },
    {
        id:11,
        img: barImg,
        title: "In-House Bar"
    },
    {
        id:12,
        img: parking,
        title: "Spacious Parking Facility"
    },
]

export const OTHER_FAC = [
    {
        id:13,
        img:carRental,
        title: "Car Rental"
    },
    {
        id:14,
        img:customerSupport,
        title: "Customer Support"
    },
    {
        id:15,
        img:wifi,
        title: "WiFi"
    },
    {
        id:16,
        img:petsBan,
        title: "No pets"
    }
]

export const CONTACT_INFO = {
    name:"TGI Apple Inn, Jaipur",
    address: "E-7, 36, Nirman Nagar, DCM Ajmer Road, Jaipur, Rajasthan - 302019",
    email:"appleinn@tgihotels.com",
    phone1:"+91 14 1486 0090",
    phone2:"180 0258 3100",
}
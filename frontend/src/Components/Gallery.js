import { GALLERY_DATA } from "../utils/constants"
import Facility from "./Facility"

const Gallery = () => {
  return (
    <div className="flex items-center justify-start gap-5 flex-wrap">
        {GALLERY_DATA.map((item, index) => (
            <Facility key={index} item={item} gallery={true} />
        ))}
    </div>
  )
}

export default Gallery

import HeartButton from "../HeartButton";
import Button from "../Button";
import useCountries from "../../hooks/useCountries";
import Heading from "../Heading";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {  useState } from "react";
function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) {
 
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (selectedIndex) => {
    setSelectedImage(selectedIndex);
  };


  return (
    <>
      <Heading
        title={title}
        subtitle='Africa, Kenya'
      />
<div
  className="
    w-full
    h-[60vh]
    overflow-hidden 
    relative
  "
>
  <Carousel
    selectedItem={selectedImage}
    onChange={handleImageChange}
    showThumbs={false}
    showIndicators={false}
    infiniteLoop={true}
  >
    {imageSrc.map((src, index) => (
      <div key={index} className="h-full w-full">
        <img src={src} alt={`Slide ${index}`} className="object-cover w-full h-full" />
      </div>
    ))}
  </Carousel>
  <div
    className="
      absolute
      top-5
      right-5
    "
  >
    <HeartButton listingId={id} currentUser={currentUser} />
  </div>
</div>


    </>
  )
}

export default ListingHead

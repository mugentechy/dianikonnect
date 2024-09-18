import ListingCategory from "../components/listing/ListingCategory";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import Search from "../components/navbar/Search";
import { BiBadgeCheck  } from 'react-icons/bi';
import { BiBeenHere   } from 'react-icons/bi';
import { useState } from 'react';



function HomePage({listings ,isLoading}) {

    const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // Display 5 items at a time

  const handleNext = () => {
    if (startIndex + itemsPerPage < listings?.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };


 const { currentUser } = useSelector((state) => state.currentUser)

  return (
    <>
<div className="relative h-[600px] sm:h=[400px] lg:h=[500px] xl:h=[600px] 2xl:h-[700px]">
  <img
    className="w-full h-full object-cover"
    src="/images/banner.jpg"
    alt="Logo"
  />


<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
<p className="text-sm sm:text-lg">
Get your dream home

</p>
        <Search />
 
</div>
</div>

<main className="max-w-7xl mx-auto px-8 sm:px-16">

<section className="pt-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* First Half */}
    <div>
      <img 
        src="/images/agent.webp" 
        alt="Beautiful Home" 
        className="w-full max-w-xs h-auto mb-4"
      />
      <p className="text-lg">
        We help people find the best places to live so that they can have everything they want.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        View More
      </button>
    </div>
    
    {/* Second Half */}
    <div>
      <div className="flex items-center">
        <BiBadgeCheck className="text-blue-500 mr-2" />
        <p className="text-lg font-semibold">
          We have the expertise to help you find your perfect home
        </p>
      </div>
      <p className="mt-4">
        We know the ins and outs of the real estate market, and we can help you find a home that fits your needs and budget. We'll work with you to find the perfect home for you and your family.
      </p>
      
      <div className="flex items-center mt-6">
        <BiBadgeCheck className="text-blue-500 mr-2" />
        <p className="text-lg font-semibold">
          We offer expert advice and information on the market.
        </p>
      </div>
      <p className="mt-4">
        We have a wide range of knowledge and experience, and we're always happy to share it with you. We're dedicated to providing you with honest and expert advice about the market.
      </p>

      <div className="flex items-center mt-6">
        <BiBadgeCheck className="text-blue-500 mr-2" />
        <p className="text-lg font-semibold">
          We'll find a property to suit your needs.
        </p>
      </div>
      <p className="mt-4">
        If you're looking for a property, we'll do our best to find one that suits your needs. We'll show you any property that interests you, even if it's not on our website or in your price range.
      </p>
    </div>
  </div>
</section>




    <section className="pt-24">
      <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mb-4">
        <button 
          onClick={handlePrevious} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300" 
          disabled={startIndex === 0}
        >
          Previous
        </button>
        
        <button 
          onClick={handleNext} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300" 
          disabled={startIndex + itemsPerPage >= listings?.length}
        >
          Next
        </button>
      </div>

      {/* Listings Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {!listings ? (
          <Loader />
        ) : (
          listings
            .slice(startIndex, startIndex + itemsPerPage)
            .map((listing) => (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))
        )}
      </div>
    </section>

 <section className="pt-24">

  <div className="flex items-center justify-center pb-5">
    <div className="flex-grow h-px bg-gray-300"></div>
    <BiBeenHere className="mx-4 text-4xl text-blue-500" />
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>

<h3 className="text-4xl font-semibold pb-5 text-center">Available Amenities</h3>
    <div 
        className="
        pt-6
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
     {amenities.map((item) => (
      <div key={item.label} className="col-span-1">
        <ListingCategory
          icon={item.icon} 
          label={item?.label}
          description={item?.description} 
        />
        </div>
      ))}
 </div>
 </section>


<section className="pt-24">
  <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
    <img
      src="/images/jumb.jpg"
      className="object-cover w-full h-full"
      alt="Image"
    />
    
    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Join Us Today</h1>
      <p className="text-lg">
        Be part of something bigger and explore the best opportunities with us.
      </p>
    </div>
  </div>
</section>

 </main>
    </>
  )
}

export default HomePage

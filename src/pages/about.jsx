import ListingCategory from "../components/listing/ListingCategory";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import Search from "../components/navbar/Search";
import { BiBadgeCheck, BiBeenHere } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

import Select from 'react-select'
import Input from "../components/inputs/Input";

import { useForm } from 'react-hook-form'




function AboutPage() {
  // For number increment animation
  const [count, setCount] = useState({ listingsForSale: 0, listingsForRent: 0, propertySold: 0, affiliatePartners: 0 });
  const hasAnimated = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

   const {
        register, 
        handleSubmit,  
        formState: {
          errors,
        },
     } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  useEffect(() => {
    if (!hasAnimated.current) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount.listingsForSale < 2500) {
            return { ...prevCount, listingsForSale: Math.min(prevCount.listingsForSale + 50, 2500) };
          }
          if (prevCount.listingsForRent < 1350) {
            return { ...prevCount, listingsForRent: Math.min(prevCount.listingsForRent + 30, 1350) };
          }
          if (prevCount.propertySold < 900) {
            return { ...prevCount, propertySold: Math.min(prevCount.propertySold + 20, 900) };
          }
          if (prevCount.affiliatePartners < 15) {
            return { ...prevCount, affiliatePartners: Math.min(prevCount.affiliatePartners + 1, 15) };
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 50);
      hasAnimated.current = true;
    }
  }, []);

  return (
    <>
      <section className="pt-24">
        <div className="w-full h-[60vh] overflow-hidden relative">
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



              <section className="pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{count.listingsForSale} +</div>
              <div className="text-lg">Listings for Sale</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{count.listingsForRent} +</div>
              <div className="text-lg">Listings for Rent</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{count.propertySold} +</div>
              <div className="text-lg">Property Sold</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{count.affiliatePartners} +</div>
              <div className="text-lg">Affiliate Partners</div>
            </div>
          </div>
          <div className="pt-12 text-center">
            <p className="text-lg">
              Home is where the heart is and we hope to transform your search for your perfect home into one of joy. Our company offers exquisitely designed, modern living villas in unique locations to suit your tastes and budget. We aim at offering a fresh new take on living spaces that are unparalleled by any other developer. Our apartments are completed with the latest in contemporary architecture, luxurious fittings and fixtures, contemporary interiors that will make your home feel like a luxury hotel suite, at a price that you can afford. We have an extensive portfolio of modern living villas found in unique locations and offer a quality, contemporary design to suit your tastes and budget. This makes us the perfect choice for those who are looking for high-end quality in an easy yet affordable way. Our company will work with you throughout the process, from initial discussions to finalizing your purchase and even after your move as we are always available to answer any questions that may arise.
            </p>
          </div>
        </section>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Half */}
    <div>
          <h2 className="text-2xl font-semibold mb-4">Request a free valuation of your property</h2>
          <p className="mb-4">
            Our real estate company has a number of luxury and exclusive listings that are perfect for international clients.
          </p>
          <p className="mb-4">
            Contact us: <strong>987 654 3210</strong>
          </p>
        </div>



            {/* Second Half */}
            <div>
              
         











 <div>
          <h2 className="text-2xl font-semibold mb-4">Property Valuation Form</h2>
     <form>
  {/* First Row */}
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 mb-4 min-w-[200px]">
      <Select
        id="user_type"
        label="Personal Information"
        options={[
          { value: '', label: 'Select' },
          { value: 'Property owner', label: 'Property owner' },
          { value: 'Agent', label: 'Agent' }
        ]}
        placeholder="Select your role"
        required
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="first_name"
        label="First name"
        type="text"
        disabled={isLoading}
        register={register}
        required
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="last_name"
        label="Last name"
        type="text"
        disabled={isLoading}
        register={register}
        required
      />
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="email"
        label="Email address"
        type="email"
        disabled={isLoading}
        register={register}
        required
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="mobile"
        label="Phone number"
        type="text"
        disabled={isLoading}
        register={register}
        required
      />
    </div>
  </div>

  {/* Third Row */}
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 mb-4 min-w-[200px]">
      <Select
        id="property_type"
        label="Property Information"
        options={[
          { value: '', label: 'Type' },
          { value: 'apartment', label: 'Apartment' },
          { value: 'office', label: 'Office' },
          { value: 'shop', label: 'Shop' },
          { value: 'single-family-home', label: 'Single Family Home' },
          { value: 'studio', label: 'Studio' },
          { value: 'villa', label: 'Villa' }
        ]}
        placeholder="Select property type"
        required
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="zipcode"
        label="Zip code"
        type="text"
        disabled={isLoading}
        register={register}
        required
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Select
        id="city"
        label="City"
        options={[
          { value: '', label: 'City' },
          { value: 'fort-lauderdale', label: 'Fort Lauderdale' },
          { value: 'miami', label: 'Miami' },
          { value: 'sarasota', label: 'Sarasota' },
          { value: 'west-palm-beach', label: 'West Palm Beach' }
        ]}
        placeholder="Select city"
      />
    </div>
  </div>

  {/* Fourth Row */}
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="beds"
        label="Number of bedrooms"
        type="number"
        disabled={isLoading}
        register={register}
        required
        min="0"
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="baths"
        label="Number of bathrooms"
        type="number"
        disabled={isLoading}
        register={register}
        required
        min="0"
      />
    </div>
    <div className="flex-1 mb-4 min-w-[200px]">
      <Input
        id="price"
        label="Your budget"
        type="number"
        disabled={isLoading}
        register={register}
        required
        min="0"
      />
    </div>
  </div>

  {/* Submit Button */}
  <div className="mb-4">
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
      disabled={isLoading}
    >
      {isLoading ? 'Submitting...' : 'Submit'}
    </button>
  </div>
</form>

        </div>
  










            </div>
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



        {/* New Section with Incrementing Numbers */}

      </main>
    </>
  )
}

export default AboutPage;

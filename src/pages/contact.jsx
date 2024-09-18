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
import Map from "../components/Map"
import Select from 'react-select'
import Input from "../components/inputs/Input";

import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";

import { useForm } from 'react-hook-form'




function ContactPage() {
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


  return (
    <>






      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-24">

        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">





           <form>
  {/* First Row */}
  <div className="flex flex-wrap gap-4">

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
  <textarea
    id="message"
    label="Message"
    disabled={isLoading}
    {...register('message', { required: true })}
    className="w-full p-2 border rounded-md"
    rows="5"  // You can adjust the number of rows as needed
    placeholder="Enter your message"
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



           

            <div>
              
         

 <div>
          
    





   <Map center={[-4.3187, 39.5940]} />


<div className="mt-5 pt-5 text-center">
  <p>Find us on</p>
  
  <div className="mt-4 space-x-4 flex justify-center items-center">
    <a href="#" className="hover:text-gray-400 text-2xl">
      <BiLogoFacebook />
    </a>
    <a href="#" className="hover:text-gray-400 text-2xl">
      <BiLogoInstagram />
    </a>
    <a href="#" className="hover:text-gray-400 text-2xl">
      <BiLogoTiktok />
    </a>
  </div>
</div>





        </div>
  










            </div>
          </div>
        </section>





        {/* New Section with Incrementing Numbers */}

      </main>
    </>
  )
}

export default ContactPage;

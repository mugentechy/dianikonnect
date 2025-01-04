import HomeTags from "../components/listing/HomeTags";
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
import { toast } from "react-hot-toast";
import Select from 'react-select'
import Input from "../components/inputs/Input";

import { useForm } from 'react-hook-form'
import { contactAsync } from '../features/user/userActions'



function AboutPage() {
  // For number increment animation
  const [count, setCount] = useState({ listingsForSale: 0, listingsForRent: 0, propertySold: 0, affiliatePartners: 0 });
  const hasAnimated = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();


  const addContact = async (data) => {
   
    try {
      await dispatch(contactAsync(data));
      console.log("Form submitted successfully:", data);
      toast.success("Your request has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } 
  };

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

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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


<div className="max-w-7xl mx-auto pt-12 text-center px-6 md:px-12">
  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed ">
    <span className="font-semibold text-blue-600">
      "Home is where the heart is," 
    </span> 
    and we strive to transform your search for the perfect home into a journey of joy.  
    Our company specializes in exquisitely designed, modern living villas located in unique, serene environments to suit both your tastes and budget.
   
    We are redefining living spaces with fresh, contemporary designs unparalleled by other developers. 
    Our homes are crafted with luxurious fittings, stylish interiors, and architectural finesse—delivering a unique blend of comfort and elegance. 
  
    Explore our extensive portfolio of modern villas, each designed to offer high-end quality at an affordable price.
    Whether you’re seeking sophistication, style, or functionality, we are your trusted partner in finding a home that truly feels like a luxury retreat.
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
            Contact us: <strong>+254 725 832454</strong>
          </p>
        </div>



            {/* Second Half */}
            <div>
              
         











 <div>
          <h2 className="text-2xl font-semibold mb-4">Property Valuation Form</h2>
       <form onSubmit={handleSubmit(addContact)}>
          {/* First Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="first_name"
                label="First Name"
                type="text"
                placeholder="First Name"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
                
              {...register("fname", { required: "First name is required" })}
              />
            
            </div>
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="last_name"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
              {...register("lname", { required: "Last name is required" })}
              />
             
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="email"
                label="Email Address"
                type="email"
                placeholder="Email"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
               
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
           
            </div>
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="phone"
                label="Phone Number"
                placeholder="Phone Number"
                type="text"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
                {...register("phone", { required: "Phone number is required" })}
              />
             
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <textarea
                id="message"
                placeholder="Enter your message"
               
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded-md"
                rows="5"
              />
             
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
            
            >
              Submit
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
              md:grid-cols-4
              gap-3
           
            "
          >
            {amenities.map((item) => (
              <div key={item.label} className="col-span-1">
                <HomeTags
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

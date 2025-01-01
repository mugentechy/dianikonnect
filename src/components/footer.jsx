import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className="relative -mb-16 mx-auto w-[90%] bg-red-500 text-white py-10">
        <div className="w-[80%] mx-auto px-6 md:flex md:items-center md:justify-between text-center md:text-left">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Looking for a dream home?</h2>
            <p className="text-lg">We can help you realize your dream of a new home.</p>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="bg-white text-red-500 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 inline-flex items-center"
            >
              Explore Properties →
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="pt-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          




<div>
  {/* Logo Section */}
  <h3 className="text-2xl font-semibold mb-4">
    <img
      src="/images/logo.webp"
      height="60"
      width="60"
      alt="Logo"
    />
  </h3>

  {/* Description */}
  <p className="mb-4">
    Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
  </p>

  {/* Contact Information */}
  <ul className="space-y-2">
    <li className="flex items-center">
      <FaLocationDot className="mr-2" />
      <a href="#" className="hover:text-gray-400">Kenya, Diani</a>
    </li>
    <li className="flex items-center">
      <IoCall className="mr-2" />
      <a href="#" className="hover:text-gray-400">+0123-456789</a>
    </li>
    <li className="flex items-center">
      <MdEmail className="mr-2" />
      <a href="#" className="hover:text-gray-400">example@example.com</a>
    </li>
  </ul>

  {/* Social Media Links */}
  <div className="mt-4 flex space-x-4">
    <a href="https://www.facebook.com/vicmugenya" className="hover:text-gray-400 text-2xl">
      <BiLogoFacebook />
    </a>
    <a href="https://www.instagram.com/dianibeachrealty/profilecard/?igsh=MWhxY3FtaXc2Y2Fpeg==" className="hover:text-gray-400 text-2xl">
      <BiLogoInstagram />
    </a>
    <a href="https://www.tiktok.com/@b.mugen?_t=ZM-8siA6DSitC2&_r=1" className="hover:text-gray-400 text-2xl">
      <BiLogoTiktok />
    </a>
  </div>
</div>








          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Help</h3>
            <p className="mb-2">About This Demo</p>
            <p className="mb-2">Terms & Conditions</p>
            <p className="mb-2">Privacy Policy</p>
          </div>


           

          {/* About Section */}
   
          {/* Help Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">Search</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>



          {/* Newsletter Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Keep in touch with the latest updates</p>
 <form className="flex items-center">
  <input
    type="email"
    placeholder="Email"
    className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white p-4 rounded-r-md hover:bg-blue-600"
  >
    <SiMinutemailer />
  </button>
</form>


          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-2 pt-2 text-center">
          <p>© Diani Konnect - All rights reserved</p>
   
        </div>
      </footer>
    </>
  );
}

export default Footer;

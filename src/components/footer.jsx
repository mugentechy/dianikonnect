
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";


function Footer({ 

}) {
 

  return (
    <>
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Newsletter Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Sign up to our newsletter</h3>
      <p className="mb-4">Keep in touch with the latest updates</p>
      <form className="flex flex-col">
        <input 
          type="email" 
          placeholder="Email" 
          className="p-3 mb-4 text-black rounded-md" 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Contact me
        </button>
      </form>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <p className="mb-2">Diani, Kenya</p>
      <p className="mb-2">(254) 654 0321</p>
      <p className="mb-2">diani@email.com</p>
    </div>

    {/* About Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">About</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">About This Demo</a></li>
        <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Help Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Help</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">Search</a></li>
        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
<div className="border-t border-gray-700 mt-8 pt-8 text-center">
  <p>© Diani Konnect - All rights reserved</p>
  
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

</footer>

    </>
  )
}

export default Footer

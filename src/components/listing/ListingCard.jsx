
import HeartButton from "../HeartButton";

import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";

function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) {
  let navigate = useNavigate();

  // Set the label based on the status of the listing
  const statusLabel = data?.status === "sale" ? "For Sale" : "For Rent";

  return (
    <>
      <div 
        onClick={() => navigate(`/listing/${data?.id}`)} 
        className="col-span-1 cursor-pointer group"
      >
        <div className="flex flex-col gap-2 w-full">
          <div 
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
          >
            <img
              className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
              src={data?.image_src}
              alt="Listing"
            />
                 <div className="absolute top-3 right-3">
              {/* Render the button with the dynamic status */}


              <Button label={statusLabel} onClick={onAction} disabled={disabled} />
            </div>
            {/* Location at the bottom left */}
            <div className="absolute bottom-3 left-3 bg-white p-2 rounded-md shadow-md">
              <span className="text-sm font-semibold text-gray-800">
                {data?.location || "Location Not Available"}
              </span>
            </div>

            {/* Right side buttons (photo and gallery) */}
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button className="bg-white p-2 rounded-full shadow-md flex items-center justify-center">
              <FaCamera className="w-6 h-6 text-gray-800" />

           
                <span className="ml-1">3</span>
              </button>
              <button className="bg-white p-2 rounded-full shadow-md flex items-center justify-center">
              <FaFilm className="w-6 h-6 text-gray-800"  />
                <span className="ml-1">3</span>
              </button>
            </div>
          </div>
        </div>





     <div className="mt-2">
              <div className="text-lg font-bold">
                ${data?.price} <span className="text-sm">/Month</span>
              </div>
              <h2 className="text-xl mt-1 font-semibold">
                <a href={`/shop/${data?.title?.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-gray-300">
                  {data?.title}
                </a>
              </h2>
            </div>



<ul className="flex gap-6 mt-4 text-sm text-gray-600">
  <li className="flex items-center gap-2">
    <i className="flaticon-bed text-lg text-blue-500"></i>
    <span>{data?.bedrooms || 0} Bedrooms</span>
  </li>
  <li className="flex items-center gap-2">
    <i className="flaticon-clean text-lg text-green-500"></i>
    <span>{data?.bathrooms || 0} Bathrooms</span>
  </li>
  <li className="flex items-center gap-2">
    <i className="flaticon-square-shape-design-interface-tool-symbol text-lg text-orange-500"></i>
    <span>{data?.squareFeet || 0} sq ft</span>
  </li>
</ul>


              {/* Agent Info */}
  <div className="flex items-center justify-between mt-3">
  {/* Agent Information */}
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img
        src={data?.agentImage || "/images/author.jpg"}
        alt="Agent"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <h6 className="font-semibold text-sm">
        <a href="/team-details" className="hover:text-gray-300">
          {data?.agentName || "Victor M."}
        </a>
      </h6>
      <small className="text-xs">Property Seller</small>
    </div>
  </div>

  {/* Heart Button */}
  <HeartButton listingId={data?.id} currentUser={currentUser} />
</div>


      



      </div>
    </>
  );
}

export default ListingCard;

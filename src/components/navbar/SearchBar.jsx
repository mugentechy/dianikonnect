import { BiSearch } from 'react-icons/bi';
import { useMemo } from 'react';
import { differenceInDays } from 'date-fns';

import useSearchModal from '../../hooks/useSearchModal';
import useCountries from '../../hooks/useCountries';










function SearchBar() {



const areas = ["Chicago", "London", "Los Angeles", "New York", "New Jersey"];
const propertyStatuses = ["Open house", "Rent", "Sale", "Sold"];
const propertyTypes = ["Apartment", "Co-op", "Condo", "Single Family Home"];


  return (
    <>
    <div className="space-y-6">
      {/* Property Search Form */}
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Choose Area */}
          <select className="w-full border p-2 rounded-lg">
            <option>Choose Area</option>
            {areas.map((area, index) => (
              <option key={index} value={index + 1}>
                {area}
              </option>
            ))}
          </select>

          {/* Property Status */}
          <select className="w-full border p-2 rounded-lg">
            <option>Property Status</option>
            {propertyStatuses.map((status, index) => (
              <option key={index} value={index + 1}>
                {status}
              </option>
            ))}
          </select>

          {/* Property Type */}
          <select className="w-full border p-2 rounded-lg">
            <option>Property Type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={index + 1}>
                {type}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default SearchBar

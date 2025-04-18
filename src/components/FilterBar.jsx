import React from 'react';
import { useDoctorStore } from '../stores/doctorStore';

function FilterBar({ onSearch }) {
  const { 
    setSpecialtyFilter, 
    setAvailabilityFilter,
    setLocationFilter,
    specialtyFilter,
    availabilityFilter,
    locationFilter,
    searchDoctors
  } = useDoctorStore();

  const handleSearch = () => {
    // Trigger the search action
    searchDoctors();
    // Scroll to results if callback provided
    if (onSearch) {
      onSearch();
    }
  };

  const handleClearFilters = () => {
    setSpecialtyFilter('');
    setAvailabilityFilter('');
    setLocationFilter('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </div>
          </label>
          <select
            id="location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            <option value="">All Locations</option>
            <option value="New York, NY">New York</option>
            <option value="Los Angeles, CA">Los Angeles</option>
            <option value="Chicago, IL">Chicago</option>
            <option value="Houston, TX">Houston</option>
          </select>
        </div>

        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Specialty
            </div>
          </label>
          <select
            id="specialty"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            <option value="">All Specialties</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Ophthalmology">Ophthalmology</option>
          </select>
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Availability
            </div>
          </label>
          <select
            id="availability"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            <option value="">All</option>
            <option value="available">Available Today</option>
            <option value="unavailable">Not Available</option>
          </select>
        </div>

        <div className="flex items-end space-x-2">
          <button
            onClick={handleSearch}
            className="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            aria-label="Search doctors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
          {(specialtyFilter || availabilityFilter || locationFilter) && (
            <button
              onClick={handleClearFilters}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Clear all filters"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
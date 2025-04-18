import React from 'react';
import { useDoctorStore } from '../stores/doctorStore';

function DoctorCard({ doctor }) {
  const { setSelectedDoctor, setIsBookingModalOpen } = useDoctorStore();

  const handleBookAppointment = () => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
      role="article"
      aria-labelledby={`doctor-${doctor.id}-name`}
    >
      <div className="relative">
        <img 
          src={doctor.photo} 
          alt={`${doctor.name}'s profile`}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center shadow-lg">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 font-semibold text-gray-900">{doctor.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 
            id={`doctor-${doctor.id}-name`}
            className="text-xl font-bold text-gray-900 mb-1"
          >
            {doctor.name}
          </h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{doctor.experience} experience</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{doctor.reviews} reviews</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{doctor.location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              doctor.availability 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {doctor.availability ? 'Available Today' : 'Not Available'}
            </span>
            <span className="text-blue-600 font-medium">$100/hour</span>
          </div>
        </div>
        
        <button
          onClick={handleBookAppointment}
          disabled={!doctor.availability}
          className={`w-full py-3 px-6 rounded-lg text-sm font-semibold transition-colors ${
            doctor.availability
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          aria-label={`Book appointment with ${doctor.name}`}
        >
          {doctor.availability ? 'Book Appointment' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
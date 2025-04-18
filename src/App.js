import React, { useRef } from 'react';
import { useDoctorStore } from './stores/doctorStore';
import FilterBar from './components/FilterBar';
import DoctorCard from './components/DoctorCard';
import BookingModal from './components/BookingModal';
import AppointmentsList from './components/AppointmentsList';

function App() {
  const { filteredDoctors, isBookingModalOpen } = useDoctorStore();
  const doctorsSectionRef = useRef(null);

  const scrollToDoctors = () => {
    doctorsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LOGO</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Doctors</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Login / Register
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Doctor, <br />
              Book an Appointment
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover the best doctors, clinic & hospital the city nearest to you.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit a Doctor</h3>
              <p className="text-gray-600">We provide a wide range of medical services, so every person could have the opportunity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Book appointments with expert doctors who provide the best medical care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Services</h3>
              <p className="text-gray-600">Access healthcare services and emergency support around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Doctors Section */}
        <section ref={doctorsSectionRef} className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Doctors</h2>
              <p className="text-gray-600 mt-2">Find and book appointments with expert doctors</p>
            </div>
            <span className="text-sm text-gray-500">{filteredDoctors.length} doctors found</span>
          </div>

          <FilterBar onSearch={scrollToDoctors} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
            {filteredDoctors.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-500">No doctors found matching your criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Appointments Section */}
        <section>
          <AppointmentsList />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HealthCare Connect</h3>
              <p className="text-gray-400">
                Connecting patients with the best healthcare professionals for quality medical care.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Search for Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Register</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                123 Medical Center Drive<br />
                Healthcare City, HC 12345<br />
                Phone: (123) 456-7890
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthCare Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingModalOpen && <BookingModal />}
    </div>
  );
}

export default App;

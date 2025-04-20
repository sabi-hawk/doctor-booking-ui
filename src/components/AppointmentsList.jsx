import React from 'react';
import { useDoctorStore } from '../stores/doctorStore';

function AppointmentsList() {
  const { appointments } = useDoctorStore();

  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
         
        </div>
        <div className="text-center py-8">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500">No appointments booked yet</p>
          <p className="text-sm text-gray-400 mt-1">Book your first appointment with our specialists</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">My Appointments</h2>
        <span className="text-sm text-gray-500">{appointments.length} appointment{appointments.length !== 1 ? 's' : ''}</span>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            role="article"
            aria-labelledby={`appointment-${appointment.id}-title`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={appointment.doctor.photo} 
                  alt={appointment.doctor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 
                      id={`appointment-${appointment.id}-title`}
                      className="text-lg font-medium text-gray-800"
                    >
                      {appointment.doctor.name}
                    </h3>
                    <p className="text-blue-600 text-sm">{appointment.doctor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800 font-medium">{appointment.timeSlot.time}</p>
                    <p className="text-xs text-gray-500">{appointment.date}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{appointment.doctor.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;
import { create } from "zustand";
import { doctors } from '../data/doctorsMock';

export const useDoctorStore = create((set, get) => ({
  doctors,
  filteredDoctors: doctors,
  appointments: [],
  specialtyFilter: '',
  availabilityFilter: '',
  locationFilter: '',
  selectedDoctor: null,
  isBookingModalOpen: false,
  selectedTimeSlot: null,

  // Actions
  setSpecialtyFilter: (specialty) => set({ specialtyFilter: specialty }),
  setAvailabilityFilter: (availability) => set({ availabilityFilter: availability }),
  setLocationFilter: (location) => set({ locationFilter: location }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
  setSelectedTimeSlot: (timeSlot) => set({ selectedTimeSlot: timeSlot }),
  setIsBookingModalOpen: (isOpen) => set({ isBookingModalOpen: isOpen }),
  
  addAppointment: (appointment) => 
    set((state) => ({
      appointments: [...state.appointments, appointment]
    })),

  // Explicit search action that updates state
  searchDoctors: () => {
    const state = get();
    let filtered = state.doctors;
    
    if (state.specialtyFilter) {
      filtered = filtered.filter(doctor => 
        doctor.specialty === state.specialtyFilter
      );
    }
    
    if (state.availabilityFilter) {
      filtered = filtered.filter(doctor => {
        if (state.availabilityFilter === 'available') {
          return doctor.availability === true;
        } else if (state.availabilityFilter === 'unavailable') {
          return doctor.availability === false;
        }
        return true;
      });
    }

    if (state.locationFilter) {
      filtered = filtered.filter(doctor => 
        doctor.location === state.locationFilter
      );
    }
    
    // Update the state with filtered results
    set({ filteredDoctors: filtered });
  }
}));

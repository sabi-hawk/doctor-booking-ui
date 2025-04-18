import { render, screen, fireEvent } from '@testing-library/react';
import DoctorCard from './DoctorCard';
import { useDoctorStore } from '../stores/doctorStore';

// Mock the Zustand store
jest.mock('../stores/doctorStore', () => ({
  useDoctorStore: jest.fn()
}));

describe('DoctorCard', () => {
  const mockDoctor = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.8,
    reviews: 124,
    experience: '12 years',
    availability: true,
    location: 'New York, NY',
    photo: 'https://example.com/photo.jpg',
    timeSlots: [
      { id: 1, time: '09:00 AM', available: true },
      { id: 2, time: '10:00 AM', available: true }
    ]
  };

  beforeEach(() => {
    useDoctorStore.mockImplementation(() => ({
      setSelectedDoctor: jest.fn(),
      setIsBookingModalOpen: jest.fn()
    }));
  });

  it('renders doctor information correctly', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    
    expect(screen.getByText('Dr. Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
    expect(screen.getByText('4.8')).toBeInTheDocument();
    expect(screen.getByText('124 reviews')).toBeInTheDocument();
    expect(screen.getByText('12 years experience')).toBeInTheDocument();
    expect(screen.getByText('New York, NY')).toBeInTheDocument();
  });

  it('shows available status when doctor is available', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    expect(screen.getByText('Available Today')).toBeInTheDocument();
  });

  it('shows unavailable status when doctor is not available', () => {
    const unavailableDoctor = { ...mockDoctor, availability: false };
    render(<DoctorCard doctor={unavailableDoctor} />);
    expect(screen.getByText('Not Available')).toBeInTheDocument();
  });

  it('calls setSelectedDoctor and setIsBookingModalOpen when Book Appointment is clicked', () => {
    const setSelectedDoctor = jest.fn();
    const setIsBookingModalOpen = jest.fn();
    
    useDoctorStore.mockImplementation(() => ({
      setSelectedDoctor,
      setIsBookingModalOpen
    }));

    render(<DoctorCard doctor={mockDoctor} />);
    fireEvent.click(screen.getByText('Book Appointment'));
    
    expect(setSelectedDoctor).toHaveBeenCalledWith(mockDoctor);
    expect(setIsBookingModalOpen).toHaveBeenCalledWith(true);
  });
}); 
export const specialties = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Dermatology",
  "Orthopedics",
  "General Medicine",
  "Dentistry",
  "Ophthalmology"
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    reviews: 124,
    experience: "12 years",
    availability: true,
    location: "New York, NY",
    photo: "https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-10.jpg",
    timeSlots: [
      { id: 1, time: "09:00 AM", available: true },
      { id: 2, time: "10:00 AM", available: true },
      { id: 3, time: "11:00 AM", available: false },
      { id: 4, time: "02:00 PM", available: true },
      { id: 5, time: "03:00 PM", available: true },
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.9,
    reviews: 98,
    experience: "15 years",
    availability: true,
    location: "Los Angeles, CA",
    photo: "https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-09.jpg",
    timeSlots: [
      { id: 1, time: "09:30 AM", available: true },
      { id: 2, time: "10:30 AM", available: true },
      { id: 3, time: "11:30 AM", available: true },
      { id: 4, time: "02:30 PM", available: false },
      { id: 5, time: "03:30 PM", available: true },
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.7,
    reviews: 156,
    experience: "8 years",
    availability: true,
    location: "Chicago, IL",
    photo: "https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-11.jpg",
    timeSlots: [
      { id: 1, time: "08:00 AM", available: true },
      { id: 2, time: "09:00 AM", available: false },
      { id: 3, time: "10:00 AM", available: true },
      { id: 4, time: "01:00 PM", available: true },
      { id: 5, time: "02:00 PM", available: true },
    ]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Dermatology",
    rating: 4.6,
    reviews: 87,
    experience: "10 years",
    availability: false,
    location: "Houston, TX",
    photo: "https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-09.jpg",
    timeSlots: [
      { id: 1, time: "09:00 AM", available: false },
      { id: 2, time: "10:00 AM", available: false },
      { id: 3, time: "11:00 AM", available: false },
      { id: 4, time: "02:00 PM", available: false },
      { id: 5, time: "03:00 PM", available: false },
    ]
  }
];

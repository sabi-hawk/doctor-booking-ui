import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
  appointments: [],
  bookAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),
}));

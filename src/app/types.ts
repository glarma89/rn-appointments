export type Specialty = 'Family Medicine' | 'Dermatologist' | 'Gynecologist';

export interface CalendarSlot {
  date: string;  
  time: string;  
}

export interface Appointment {
  specialty: Specialty;
  slot: CalendarSlot;
  patientName: string;
}

export interface AppState {
  isLoggedIn: boolean;
  patientName: string;
  activeAppointment: Appointment | null;
}

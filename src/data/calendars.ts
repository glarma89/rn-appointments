import { Specialty, CalendarSlot } from '../app/types';

export const SPECIALTIES: Specialty[] = [
  'Family Medicine',
  'Dermatologist',
  'Gynecologist',
];

export const CALENDARS: Record<Specialty, CalendarSlot[]> = {
  'Family Medicine': [
    { date: '2025-07-15', time: '09:00' },
    { date: '2025-07-15', time: '10:30' },
    { date: '2025-07-15', time: '14:00' },
    { date: '2025-07-16', time: '08:30' },
    { date: '2025-07-16', time: '11:00' },
    { date: '2025-07-16', time: '15:30' },
  ],
  Dermatologist: [
    { date: '2025-07-17', time: '10:00' },
    { date: '2025-07-17', time: '13:30' },
    { date: '2025-07-17', time: '16:00' },
    { date: '2025-07-18', time: '09:30' },
    { date: '2025-07-18', time: '12:00' },
    { date: '2025-07-18', time: '17:00' },
  ],
  Gynecologist: [
    { date: '2025-07-19', time: '08:00' },
    { date: '2025-07-19', time: '11:30' },
    { date: '2025-07-19', time: '14:30' },
    { date: '2025-07-20', time: '09:00' },
    { date: '2025-07-20', time: '13:00' },
    { date: '2025-07-20', time: '16:30' },
  ],
};

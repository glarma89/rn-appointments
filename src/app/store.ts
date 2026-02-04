import { AppState, Appointment, Specialty, CalendarSlot } from './types';

export type Action =
  | { type: 'RESTORE_STATE'; payload: AppState }
  | { type: 'LOGIN'; payload: { patientName: string } }
  | { type: 'LOGOUT' }
  | { type: 'BOOK_APPOINTMENT'; payload: Appointment }
  | { type: 'CANCEL_APPOINTMENT' };

export const initialState: AppState = {
  isLoggedIn: false,
  patientName: '',
  activeAppointment: null,
};



export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'RESTORE_STATE':
      return action.payload;

    case 'LOGIN':
      return { ...state, isLoggedIn: true, patientName: action.payload.patientName };

    case 'LOGOUT':
      return { ...initialState };

    case 'BOOK_APPOINTMENT':
      return { ...state, activeAppointment: action.payload };

    case 'CANCEL_APPOINTMENT':
      return { ...state, activeAppointment: null };

    default:
      return state;
  }
}

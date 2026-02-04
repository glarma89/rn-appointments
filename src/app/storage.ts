import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from './types';
import { initialState } from './store';
import { useEffect } from 'react';

const KEY = 'RN_APPOINTMENTS_APP_STATE_V1';



export async function loadState(): Promise<AppState> {

  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return initialState;

  try {
    const parsed = JSON.parse(raw);
    
    const isLoggedIn = parsed.isLoggedIn === true || parsed.isLoggedIn === 'true';
    
    return {
      isLoggedIn: isLoggedIn,
      patientName: typeof parsed.patientName === 'string' ? parsed.patientName : '',
      activeAppointment: parsed.activeAppointment ?? null,
    };
  } catch (error) {
    return initialState;
  }
}

export async function saveState(state: AppState): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(state));
}

export async function clearState(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}

import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { AppState } from './types';
import { Action, initialState, reducer } from './store';
import { loadState, saveState } from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextValue = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  isHydrated: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    (async () => {
      const restored = await loadState();
      dispatch({ type: 'RESTORE_STATE', payload: restored });
      setHydrated(true);
    })();
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    saveState(state);
  }, [state, isHydrated]);

  const value = useMemo(() => ({ state, dispatch, isHydrated }), [state, isHydrated]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

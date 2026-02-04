export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Calendar: { specialty: import('../app/types').Specialty; mode: 'create' | 'update' };
  Summary: { specialty: import('../app/types').Specialty; date: string; time: string };
};

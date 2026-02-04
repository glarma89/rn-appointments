# React Native Practical Test
Simple React Native (Expo) app for booking medical appointments.  
All data is static + stored locally.

## Tech Stack
- Expo + React Native + TypeScript
- React Navigation (Native Stack)
- State management: Context API + useReducer
- Local persistence: AsyncStorage

## Features
- Login screen (any username/password is accepted)
- Booking flow:
  - choose medical specialty
  - view doctor calendar (static available slots)
  - select slot
  - confirm appointment summary
- Existing appointment management:
  - if an active appointment exists, it is shown right after login
  - update appointment (go to calendar to select a new slot)
  - cancel appointment (shows success message)
- Persistence:
  - login state and active appointment are restored after app restart

## Project Structure
src/
- app/         (store, reducer, context provider, persistence)
- data/        (static calendars)
- navigation/  (stack navigator + routes)
- screens/     (Login, Home, Calendar, Summary)
- components/  (basic UI components)

## Debagging
React Native Debugger

## How to Run
1) Install dependencies:
```bash
npm install
npm start
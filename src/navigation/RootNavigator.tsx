import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import { useApp } from '../app/AppProvider';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SummaryScreen from '../screens/SummaryScreen';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { state, isHydrated } = useApp();

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!state.isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Appointments' }} />
            <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: "Doctor's Calendar" }} />
            <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'Summary' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

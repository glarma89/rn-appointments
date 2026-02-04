import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/routes';
import PrimaryButton from '../components/PrimaryButton';
import { useApp } from '../app/AppProvider';

type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

export default function SummaryScreen({ route, navigation }: Props) {
  const { specialty, date, time } = route.params;
  const { state, dispatch } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Appointment summary</Text>

      <View style={styles.card}>
        <Text>Patient: {state.patientName}</Text>
        <Text>Specialty: {specialty}</Text>
        <Text>Date: {date}</Text>
        <Text>Time: {time}</Text>
      </View>

      <PrimaryButton
        title="Confirm"
        onPress={() => {
          dispatch({
            type: 'BOOK_APPOINTMENT',
            payload: {
              patientName: state.patientName,
              specialty,
              slot: { date, time },
            },
          });


          navigation.popToTop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  h1: { fontSize: 18, fontWeight: '700' },
  card: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, gap: 6 },
});

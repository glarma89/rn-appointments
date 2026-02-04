import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/routes';
import { useApp } from '../app/AppProvider';
import { SPECIALTIES } from '../data/calendars';
import { Specialty } from '../app/types';
import PrimaryButton from '../components/PrimaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { state, dispatch } = useApp();
  const [selected, setSelected] = useState<Specialty>('Family Medicine');

  if (state.activeAppointment) {
    const a = state.activeAppointment;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Active appointment</Text>

        <View style={styles.card}>
          <Text>Patient: {a.patientName}</Text>
          <Text>Specialty: {a.specialty}</Text>
          <Text>Date: {a.slot.date}</Text>
          <Text>Time: {a.slot.time}</Text>
        </View>

        <PrimaryButton
          title="Update appointment"
          onPress={() => navigation.navigate('Calendar', { specialty: a.specialty, mode: 'update' })}
        />

        <PrimaryButton
          title="Cancel appointment"
          onPress={() => {
            dispatch({ type: 'CANCEL_APPOINTMENT' });
            Alert.alert('Success', 'Appointment cancelled successfully');
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Book appointment</Text>

      <Text style={styles.label}>Select specialty</Text>
      {SPECIALTIES.map((s) => (
        <Pressable
          key={s}
          style={[styles.option, selected === s && styles.optionSelected]}
          onPress={() => setSelected(s)}
        >
          <Text style={styles.optionText}>{s}</Text>
        </Pressable>
      ))}

      <PrimaryButton
        title="Search calendars"
        onPress={() => navigation.navigate('Calendar', { specialty: selected, mode: 'create' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  h1: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  label: { fontWeight: '600', marginTop: 8 },
  option: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  optionSelected: { borderColor: '#1976d2', backgroundColor: '#e3f2fd' },
  optionText: { fontSize: 16 },
  card: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, gap: 6 },
});

import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/routes';
import { CALENDARS } from '../data/calendars';
import PrimaryButton from '../components/PrimaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Calendar'>;

export default function CalendarScreen({ route, navigation }: Props) {
  const { specialty } = route.params;
  const slots = CALENDARS[specialty];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const canBook = selectedIndex !== null;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Specialty: {specialty}</Text>
      <Text style={styles.label}>Available slots</Text>

      {slots.map((s, idx) => (
        <Pressable
          key={`${s.date}_${s.time}`}
          style={[styles.slot, selectedIndex === idx && styles.slotSelected]}
          onPress={() => setSelectedIndex(idx)}
        >
          <Text style={styles.slotText}>{s.date} — {s.time}</Text>
        </Pressable>
      ))}

      <PrimaryButton
        title="Book appointment"
        disabled={!canBook}
        onPress={() => {
          const slot = slots[selectedIndex!];
          navigation.navigate('Summary', { specialty, date: slot.date, time: slot.time });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  h1: { fontSize: 18, fontWeight: '700' },
  label: { fontWeight: '600' },
  slot: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  slotSelected: { borderColor: '#1976d2', backgroundColor: '#e3f2fd' },
  slotText: { fontSize: 16 },
});

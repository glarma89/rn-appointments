import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function PrimaryButton(props: { title: string; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable style={[styles.btn, props.disabled && styles.disabled]} onPress={props.onPress} disabled={props.disabled}>
      <Text style={styles.txt}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#1976d2', padding: 12, borderRadius: 8, alignItems: 'center' },
  disabled: { opacity: 0.5 },
  txt: { color: 'white', fontWeight: '600' },
});

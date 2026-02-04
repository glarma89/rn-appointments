import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Field from '../components/Field';
import PrimaryButton from '../components/PrimaryButton';
import { useApp } from '../app/AppProvider';

export default function LoginScreen() {
  const { dispatch } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = username.trim().length > 0 && password.length > 0;

  const onLogin = () => {
    dispatch({ type: 'LOGIN', payload: { patientName: username.trim() } });
  };

  return (
    <View style={styles.container}>
      <Field label="Username" value={username} onChangeText={setUsername} />
      <Field label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <PrimaryButton title="Login" onPress={onLogin} disabled={!canLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, justifyContent: 'center' },
});

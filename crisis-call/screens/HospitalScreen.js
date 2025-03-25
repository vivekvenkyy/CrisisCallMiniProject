import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HospitalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospital Dashboard</Text>
      <Text>Welcome, Hospital! You can view medical emergencies here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});
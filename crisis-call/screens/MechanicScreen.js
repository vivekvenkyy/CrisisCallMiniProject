import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MechanicScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mechanic Dashboard</Text>
      <Text>Welcome, Mechanic! You can view traffic emergencies here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});
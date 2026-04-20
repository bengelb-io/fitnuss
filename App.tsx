import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import pkg from './package.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pkg.name}</Text>
      <Text style={styles.subtitle}>Basic fitness tracking app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f14',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#f5f7fa',
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#8a94a6',
    fontSize: 16,
    marginTop: 8,
  },
});

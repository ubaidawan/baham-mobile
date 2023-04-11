import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Demo: Views
    <View style={styles.container}>
      <View style={{flex: 0.15, marginTop: 26, backgroundColor: 'gold'}} />
      <View style={{flex: 0.8, backgroundColor: 'beige'}} />
      <View style={{flex: 0.05, backgroundColor: 'fuchsia'}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

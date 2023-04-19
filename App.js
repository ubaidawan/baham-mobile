import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Demo: Views and Text
    <View style={styles.container}>
      <View style={{flex: 0.15, marginTop: 26, backgroundColor: 'gold'}} >
        <Text style={{fontSize: 32, padding: 5, textAlign: 'center', color: 'maroon'}}>Baham Mobile</Text>
        <Text style={{fontSize: 18, textAlign: 'center'}}>Reducing your carbon footprint...</Text>
      </View>
      <View style={{flex: 0.8, backgroundColor: 'beige'}} />
      <View style={{flex: 0.05, backgroundColor: 'fuchsia'}}>
        <Text style={{fontSize: 12, textAlign: 'center'}}>&copy; Project Dareecha (2023)</Text>
        <Text style={{fontSize: 12, textAlign: 'center', fontStyle: 'italic'}}>Karachi Insitute of Economics & Technology </Text>
      </View>
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

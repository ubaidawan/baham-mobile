import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const vehicleModels = ['Toyota Corolla', 'Honda Civic', 'Suzuki Mehran', 'Daihatsu Cuore', 'Honda CD-70', 'Toyota Hiace', 'Honda City', 'Suzuki Swift']

export default function App() {
  return (
    // Demo: Header and Footer
    <View style={styles.container}>
      {/* Attach header component */}
      <AppHeader />
      <View style={styles.mainContainer}>
        <ScrollView 
          indicatorStyle={'white'}
          horizontal={false}
          style={{padding: 20, backgroundColor: 'beige'}}
        >
        <Text style={{textAlign: 'center', fontSize: 22}}>Vehicles in the queue...</Text>
        {
          vehicleModels.map((item, index) => (<Text style={styles.menuItem}>{index + 1} - {item}</Text>))
        }
        </ScrollView>
      </View>
      {/* Attach footer component */}
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gold'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuItem: {
    textAlign: 'center',
    margin: 12,
    fontSize: 16,
    color: 'maroon'
  }
});

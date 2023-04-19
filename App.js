import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const vehicleModels = ['Toyota Corolla', 'Honda Civic', 'Suzuki Mehran', 'Daihatsu Cuore', 'Honda CD-70', 'Toyota Hiace', 'Honda City', 'Suzuki Swift']

const allVehicles = [
  {'id': 1, 'name': "Honda CD70", 'capacity': 2 }, 
  {'id': 2, 'name': "Honda CG125", 'capacity': 2 }, 
  {'id': 3, 'name': "Honda City", 'capacity': 4 }, 
  {'id': 4, 'name': "Honda Civic", 'capacity': 4 }, 
  {'id': 5, 'name': "Honda Accord", 'capacity': 5 }, 
  {'id': 6, 'name': "Honda BR-V", 'capacity': 4 }, 
  {'id': 7, 'name': "Honda CR-Z", 'capacity': 4 }, 
  {'id': 8, 'name': "Hyundai Elantra", 'capacity': 4 }, 
  {'id': 9, 'name': "Hyundai Sonata", 'capacity': 4 }, 
  {'id': 10, 'name': "Hyundai Tucson", 'capacity': 5 }, 
  {'id': 11, 'name': "Hyundai Santro", 'capacity': 4 }, 
  {'id': 12, 'name': "Hyundai Shehroz", 'capacity': 10 }, 
  {'id': 13, 'name': "Kia Picanto", 'capacity': 4 }, 
  {'id': 14, 'name': "Kia Sportage", 'capacity': 5 }, 
  {'id': 15, 'name': "Kia Stonic", 'capacity': 5 }, 
  {'id': 16, 'name': "Kia Grand Carnival", 'capacity': 7 }, 
  {'id': 17, 'name': "MG ZS", 'capacity': 5 }, 
  {'id': 18, 'name': "MG HS", 'capacity': 5 }, 
  {'id': 19, 'name': "Suzuki Mehran", 'capacity': 4 }, 
  {'id': 20, 'name': "Suzuki Alto", 'capacity': 4 }, 
  {'id': 21, 'name': "Suzuki Bolan", 'capacity': 6 }, 
  {'id': 22, 'name': "Suzuki Cultus", 'capacity': 4 }, 
  {'id': 23, 'name': "Suzuki Wagon R", 'capacity': 4 }, 
  {'id': 24, 'name': "Suzuki Swift", 'capacity': 4 }, 
  {'id': 25, 'name': "Suzuki Baleno", 'capacity': 5 }, 
  {'id': 26, 'name': "Suzuki FX", 'capacity': 4 }, 
  {'id': 27, 'name': "Suzuki Liana", 'capacity': 4 }, 
  {'id': 28, 'name': "Suzuki Khyber", 'capacity': 4 }, 
  {'id': 29, 'name': "Suzuki Margalla", 'capacity': 4 }, 
  {'id': 30, 'name': "Suzuki Potohar", 'capacity': 6 }, 
  {'id': 31, 'name': "Suzuki GD110S", 'capacity': 2 }, 
  {'id': 32, 'name': "Suzuki GSX125", 'capacity': 2 }, 
  {'id': 33, 'name': "Suzuki GS150", 'capacity': 2 }, 
  {'id': 34, 'name': "Suzuki Sprinter", 'capacity': 2 }, 
  {'id': 35, 'name': "Toyota Corolla", 'capacity': 4 }, 
  {'id': 36, 'name': "Toyota Camry", 'capacity': 4 }, 
  {'id': 37, 'name': "Toyota Prius", 'capacity': 4 }, 
  {'id': 38, 'name': "Toyota Vitz", 'capacity': 4 }, 
  {'id': 39, 'name': "Toyota Yaris", 'capacity': 4 }, 
  {'id': 40, 'name': "Toyota Hilux", 'capacity': 9 }, 
  {'id': 41, 'name': "Toyota Fortuner", 'capacity': 6 }, 
  {'id': 42, 'name': "Toyota Land Cruiser", 'capacity': 6 }, 
  {'id': 44, 'name': "Toyota Hiace", 'capacity': 13 }, 
  {'id': 45, 'name': "Toyota Coaster", 'capacity': 22 }, 
  {'id': 46, 'name': "Yamaha YBR125", 'capacity': 2 }
]

export default function App() {

  // Vehicle item component
  const Item = ({name, capacity}) => {
    return (
      <View>
        <Text style={styles.menuItem}>{name} ({capacity})</Text>
      </View>
    )
  }

  // Handler function to render a single Vehicle item
  const renderVehicleItem = ({item}) => <Item name={item.name} capacity={item.capacity}></Item>

  return (
    // Demo: Flat List
    <View style={styles.container}>
      {/* Attach header component */}
      <AppHeader />
      <View style={styles.mainContainer}>
        <FlatList 
          data={allVehicles}
          renderItem={renderVehicleItem}
        />
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

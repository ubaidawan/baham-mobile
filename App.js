import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Login from './Login';
import Menu from './Menu';
import About from './About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppHeader />
        {/* <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: 'lightyellow'}}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'device-unknown';
              if (route.name === 'About') {
                iconName = focused
                  ? 'info'
                  : 'info-outline';
              } else if (route.name === 'Menu') {
                iconName = focused
                  ? 'menu-open'
                  : 'menu';
              } else if (route.name === 'Logout') {
                iconName = 'logout';
              }
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'navy',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
        <AppFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuHeader: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'navy',
  },
  menuItem: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'maroon'
  },
  showMenuText: {
    fontSize: 18,
    color: 'navy',
    textAlign: 'center',
  },
  introText: {
    fontSize: 22,
    textAlign: 'center',
  }
});

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Menu from './Menu';
import DynamicMenu from './DynamicMenu';

import About from './About';
import Setting from './Setting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Logout = () => {
  return (
    <View></View>
  )
}


export default function App() {

  return (
    // Enable Navigation
    <NavigationContainer>
      <View style={styles.container}>
        {/* Attach header component */}
        <AppHeader />
        {/* Stack Navigation */}

        {/* <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: 'lightyellow'}}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator> */}

        {/* Tab Navigation */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'device-unknown';
              if (route.name === 'About') {
                iconName = focused ? 'info' : 'info-outline';
              } else if (route.name === 'Menu') {
                iconName = focused ? 'menu-open' : 'menu';
              } else if (route.name === 'Setting') {
                iconName = 'settings';
              } else if (route.name === 'Logout') {
                iconName = 'logout';
              }
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'navy',
            tabBarInactiveTintColor: 'gray',
          })}>
          {/* <Tab.Screen name="Menu" component={Menu} /> */}
          <Tab.Screen name="Menu" component={DynamicMenu} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Setting" component={Setting} />
          <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>

        {/* <Drawer.Navigator initialRouteName="About" >
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Settings" component={Setting} />
          <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator> */}

        {/* Attach footer component */}
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

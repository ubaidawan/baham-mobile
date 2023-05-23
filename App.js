import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Login from './Login';
import Menu from './Menu';

export default function App() {

  return (
    <View style={styles.container}>
      {/* Attach header component */}
      <AppHeader />
      <Login />
      {/* <Menu /> */}
      {/* Attach footer component */}
      <AppFooter />
    </View>
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

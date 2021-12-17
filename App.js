import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/navigation';
import WatchlistProvider from "./src/Contexts/WatchlistContext";

export default function App() {
  return (
  <View style={styles.container}>
    <WatchlistProvider>
      <RootNavigation />
    <StatusBar style="light" />
    </WatchlistProvider>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 25,    
  },
});

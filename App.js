import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/navigation';
import WatchlistProvider from "./src/Contexts/WatchlistContext";
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
  <View style={styles.container}>
    <RecoilRoot>
      <WatchlistProvider>
        <RootNavigation />
      <StatusBar style="light" />
      </WatchlistProvider>
    </RecoilRoot>
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

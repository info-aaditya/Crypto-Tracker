import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import RootNavigation from './src/navigation/navigation';
import WatchlistProvider from "./src/Contexts/WatchlistContext";
import { RecoilRoot } from 'recoil';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DroidSans: require('./src/assets/fonts/DroidSans.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'}/>;
  }

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
    paddingTop: 30,
  },
});

import React, { Suspense } from 'react'
import { Text, View, Pressable } from 'react-native'
import PortfolioAssetsList from '../../components/Portfolio/PortfolioAssetsList'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const PortfolioScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Suspense
      fallback={
        <Text style={styles.textView}>
          Loading Please Wait ....!
        </Text>
      }
    >
      <PortfolioAssetsList />
    </Suspense>
    <Pressable 
        onPress={() => navigation.navigate('AddNewAssetsScreen')}
        style={styles.buttomContainer}
      >
        <Text style={styles.buttomText}>Add New Assets</Text>
      </Pressable>
    </View>
  )
}

export default PortfolioScreen;

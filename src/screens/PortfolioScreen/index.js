import React, { Suspense } from 'react'
import { Text, View } from 'react-native'
import PortfolioAssetsList from '../../components/Portfolio/PortfolioAssetsList'
import styles from './styles'

const PortfolioScreen = () => {
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
    </View>
  )
}

export default PortfolioScreen;

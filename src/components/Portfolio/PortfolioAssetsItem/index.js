import React from 'react'
import { View, Text, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import styles from './styles'

const PortfolioAssetsItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "image"}}
        style={styles.imageView}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.ticker}>BTC</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text style={styles.title}>$47695</Text>
          <View style={styles.percentageContainer}>
            <AntDesign
              name={"caretup"}
              size={12}
              color={"#16c784"}
              style={styles.icons}
            />
            <Text style={styles.percentageChange}>+2.5%</Text>
          </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>$8000</Text>
        <Text style={styles.ticker}>2 BTC</Text>
      </View>
    </View>
  )
}

export default PortfolioAssetsItem;

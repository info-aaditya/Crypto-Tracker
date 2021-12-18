import React from 'react'
import { View, Text, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import styles from './styles'

const PortfolioAssetsItem = ({ assetItem }) => {
  
  const { currentPrice, image, name, priceChangePercentage, quantityBought, ticker } = assetItem;

  const isChangePositive = () => priceChangePercentage >= 0;
  const renderHoldings = () => (quantityBought * currentPrice).toFixed(2)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image}}
        style={styles.imageView}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.ticker}>{ticker}</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text style={styles.title}>{currentPrice}</Text>
          <View style={styles.percentageContainer}>
            <AntDesign
              name={isChangePositive() ? "caretup" : "caretdown"}
              size={12}
              color={isChangePositive() ? "#16c784" : "#ea3943"}
              style={styles.icons}
            />
            <Text 
              style={[{
                color: isChangePositive() ? "#16c784" : "#ea3943",
              },styles.percentageChange]}>{priceChangePercentage.toFixed(2)}</Text>
          </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>{renderHoldings()}</Text>
        <Text style={styles.ticker}>{quantityBought} {ticker}</Text>
      </View>
    </View>
  )
}

export default PortfolioAssetsItem;

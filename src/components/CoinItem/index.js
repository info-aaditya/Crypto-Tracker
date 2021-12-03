import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const { 
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784' 

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`
    } if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`
    } if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`
    } if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`
    }
    return marketCap;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image}}
        style={styles.imageView}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={percentageColor}
            style={styles.current}
          />
          <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={styles.market}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{color: 'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </View>
  );
};

export default CoinItem;

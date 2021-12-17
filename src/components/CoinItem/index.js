import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'|| 'white';

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${Math.floor(marketCap / 1e12)} T`
    }
    if (marketCap > 1e9) {
      return `${Math.floor(marketCap / 1e9)} B`
    }
    if (marketCap > 1e6) {
      return `${Math.floor(marketCap / 1e6)} M`
    }
    if (marketCap > 1e3) {
      return `${Math.floor(marketCap / 1e3)} K`
    }
    return marketCap;
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("CoinDetailedScreen", {coinId: id})}
    >
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
          <Text style={{color: percentageColor}}>
            {price_change_percentage_24h?.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.market}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{color: 'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;

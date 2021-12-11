import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../Contexts/WatchlistContext";
import styles from "./styles";

const CoinDetailedHeader = (props) => {
  const { coinId, image, symbol, marketCapRank } = props;
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } = useWatchlist();

  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);

  const handleWatchlistCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId)
    }
    return storeWatchlistCoinId(coinId)
  };

  return (
    <View style={styles.container}>
      <Ionicons  
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ticker}>
        <Image 
          source={{
            uri: image
          }} 
          style={styles.imageView}
        />
        <Text style={styles.title}>{symbol.toUpperCase()}</Text>
        <View style={styles.rank}>
          <Text style={styles.rankText}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? "star" : "star-o"}
        size={25}
        color={checkIfCoinIsWatchlisted() ? "#FFBF00" : "white"}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};

export default CoinDetailedHeader;

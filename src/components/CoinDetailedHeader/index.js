import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

const CoinDetailedHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
      <View style={styles.ticker}>
        <Image source={{ uri: image }} style={styles.imageView} />
        <Text style={styles.title}>{symbol.toUpperCase()}</Text>
        <View style={styles.rank}>
          <Text style={styles.rankText}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailedHeader;

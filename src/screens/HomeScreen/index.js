import React, { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import CoinItem from '../../components/CoinItem';
import { getMarketData } from '../../services/requests';
import styles from './styles';

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData()
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <Text style={styles.headerText}>Crypto Assets</Text>
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      onEndReached={() => fetchCoins((coins.length / 50) + 1)}
      refreshControl={
        <RefreshControl 
          refreshing={loading}
          tintColor="white"
          onRefresh={refetchCoins}
        />
      }
    />
    </View>
  );
};

export default HomeScreen;

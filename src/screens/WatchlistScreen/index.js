import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useWatchlist } from '../../Contexts/WatchlistContext';
import CoinItem from '../../components/CoinItem';
import { getWatchlistedCoins } from '../../services/requests';
import styles from './styles';

const WatchlistScreen = () => {
  const {watchlistCoinIds} = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join('%2C');

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1, transformCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlistedCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <View>
    <Text style={styles.headerText}>Watchlist Crypto Assets</Text>
      <FlatList 
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        refreshControl={
          <RefreshControl 
            refreshing={loading}
            tintColor="white"
            onRefresh={fetchWatchlistedCoins}
          />
        }
      />
    </View>
  )
};

export default WatchlistScreen;

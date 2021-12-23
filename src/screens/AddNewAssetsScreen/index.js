import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import SearchableDropDown from 'react-native-searchable-dropdown';
import { useRecoilState } from 'recoil';
import { allPortfolioBoughtAssetsInStorage } from '../../atoms/PortfolioAssets/PortfolioAssets';
import { getAllCoins, getDetailedCoinData } from '../../services/requests'
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import styles from './styles';

const AddNewAssetsScreen = ({navigation}) => {
  const [allCoins, setAllCoins] = useState([]);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const [assetsInStorage, setAssetsInStorage] = useRecoilState(allPortfolioBoughtAssetsInStorage);

  const isQuantityEntered = () => boughtAssetQuantity === "";

  const fetchAllCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const allCoins = await getAllCoins();
    setAllCoins(allCoins);
    setLoading(false);
  };

  const fetchCoinInfo = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinInfo = await getDetailedCoinData(selectedCoinId);
    setSelectedCoin(coinInfo);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCoins();
  }, []);

  useEffect(() => {
    if (selectedCoinId) {
      fetchCoinInfo();
    }
  }, [selectedCoinId]);

  const onAddNewAsset = async () => {
    const newAsset = {
      id: selectedCoin.id,
      name: selectedCoin.name,
      unique_id: selectedCoin.id + uuid.v4(),  
      image: selectedCoin.image.small,
      ticker: selectedCoin.symbol.toUpperCase(),
      quantityBought: parseFloat(boughtAssetQuantity),
      priceBought: selectedCoin.market_data.current_price.usd,
    };
    const newAssets = [...assetsInStorage, newAsset];
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem("@portfolio_coins", jsonValue);
    setAssetsInStorage(newAssets);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <SearchableDropDown 
        items={allCoins}
        onItemSelect={(item) => setSelectedCoinId(item.id)}

        containerStyle={styles.searchContainer}
        itemStyle={styles.searchItem}
        itemTextStyle={styles.searchItemText}
        resetValue={false}
        placeholder={selectedCoinId || "Search for a Coin ...."}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: styles.searchInput,
        }}
      />
      {selectedCoin && (
        <>
          <View style={styles.quantityContainer}>
            <View style={styles.inputContainer}>
              <TextInput 
                value={boughtAssetQuantity}
                placeholder='0'
                keyboardType='numeric'
                onChangeText={setBoughtAssetQuantity}
                style={styles.inputText}
              />
              <Text style={styles.ticker}>{selectedCoin.symbol.toUpperCase()}</Text>
            </View>
            <Text style={styles.priceView}>${selectedCoin.market_data.current_price.usd} Per Coin</Text>
          </View>
          <Pressable
            onPress={onAddNewAsset}
            disabled={isQuantityEntered()}
            style={{
              ...styles.buttomContainer,
              backgroundColor: isQuantityEntered() ? "#303030" : "#4169E1",
            }}
          >
            <Text
              style={{
                ...styles.buttomText,
                color: isQuantityEntered() ? "grey" : "white",
              }}
            >
              Add New Asset
            </Text>
          </Pressable>
        </>
      )}
    </View>
  )
}

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <Ionicons
      name="chevron-back-sharp"
      size={30}
      color="white"
      onPress={() => navigation.goBack()}       
    />
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Add New Asset</Text>
    </View>
  </View>
)

export default AddNewAssetsScreen;

import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import PortfolioAssetsItem from "../PortfolioAssetsItem";
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { allPortfolioAssets } from '../../../atoms/PortfolioAssets/PortfolioAssets';
import styles from './styles';

const PortfolioAssetsList = () => {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);

  const getCurrentBalance = () =>
  assets.reduce(
    (total, currentAsset) =>
      total + currentAsset.currentPrice * currentAsset.quantityBought,
    0
  );

const getCurrentValueChange = () => {
  const currentBalance = getCurrentBalance();
  const boughtBalance = assets.reduce(
    (total, currentAsset) =>
      total + currentAsset.priceBought * currentAsset.quantityBought,
    0
  );

  return (currentBalance - boughtBalance).toFixed(2);
};

const getCurrentPercentageChange = () => {
  const currentBalance = getCurrentBalance();
  const boughtBalance = assets.reduce(
    (total, currentAsset) =>
      total + currentAsset.priceBought * currentAsset.quantityBought,
    0
  );
  return (
    (((currentBalance - boughtBalance) / boughtBalance) * 100).toFixed(2) || 0
  );
};

const isChangePositive = () => getCurrentValueChange() >= 0;
  
  return (
      <FlatList 
        data={assets}
        renderItem={({item}) => <PortfolioAssetsItem  assetItem={item}/>}
        ListHeaderComponent={
          <>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentBalance}>Current Balance</Text>
              <Text style={styles.currentBalanceValue}>${getCurrentBalance()}</Text>
              <Text
                style={{
                  ...styles.valueChange,
                  color: isChangePositive() ? "green" : "red",
                }}
              >
                ${getCurrentValueChange()} (All Time)
              </Text>
            </View>
            
            <View 
              style={{
                ...styles.percentageContainer,
                backgroundColor: isChangePositive() ? "green" : "red",
              }}
            >
              <AntDesign
                name={isChangePositive() ? "caretup" : "caretdown"}
                size={12}
                color={"white"}
                style={styles.icons}
              />
              <Text style={styles.percentageChange}>{getCurrentPercentageChange()}%</Text>
            </View>
          </View>
          <Text style={styles.assetsView}>Your Assets</Text>
          </>
        }
        ListFooterComponent={
          <>
            <Pressable 
              onPress={() => navigation.navigate('AddNewAssetsScreen')}
              style={styles.buttomContainer}
            >
              <Text style={styles.buttomText}>Add New Assets</Text>
            </Pressable>
          </>
        }
      />
  )
}

export default PortfolioAssetsList;

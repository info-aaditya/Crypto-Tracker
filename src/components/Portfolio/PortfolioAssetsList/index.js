import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import PortfolioAssetsItem from "../PortfolioAssetsItem";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const PortfolioAssetsList = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <FlatList 
        data={[{id: 'bitcoin'}]}
        renderItem={({item}) => <PortfolioAssetsItem  assetItem={item}/>}
        ListHeaderComponent={
          <>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentBalance}>Current Balance</Text>
              <Text style={styles.currentBalanceValue}>$238,475</Text>
              <Text style={styles.valueChange}>$10000 (All Time)</Text>
            </View>
            <View style={styles.percentageContainer}>
              <AntDesign
                name={"caretup"}
                size={12}
                color={"white"}
                style={styles.icons}
              />
              <Text style={styles.percentageChange}>+2.5%</Text>
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
    </View>
  )
}

export default PortfolioAssetsList;

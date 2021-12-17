import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import SearchableDropDown from 'react-native-searchable-dropdown';
import styles from './styles';

const AddNewAssetsScreen = ({navigation}) => {
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('');
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <SearchableDropDown 
        items={[]}
        onItemSelect={(item) => console.log(item)}

        containerStyle={styles.searchContainer}
        itemStyle={styles.searchItem}
        itemTextStyle={styles.searchItemText}
        resetValue={false}
        placeholder="Search for a Coin ...."
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: styles.searchInput,
        }}
      />
      <View style={styles.quantityContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
            value={boughtAssetQuantity}
            placeholder='0'
            keyboardType='numeric'
            onChangeText={setBoughtAssetQuantity}
            style={styles.inputText}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
        <Text style={styles.priceView}>$51145 Per Coin</Text>
      </View>
      <Pressable 
        onPress={() => navigation.navigate('AddNewAssetsScreen')}
        style={styles.buttomContainer}
      >
        <Text style={styles.buttomText}>Done</Text>
      </Pressable>
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

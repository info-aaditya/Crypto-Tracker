import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    color: "white",
    fontSize: 15,
  },
    
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },

  graphView: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
  },

  icons: {
    alignItems: "center",
    marginRight: 5,
  },
  
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },

  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2B2B2B',
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10
  },

  rateContainer: {
    flexDirection: "row"
  },

  rateView: {
    flexDirection: "row",
    flex: 1
  },

  cryptoName: {
    color: "white",
    alignSelf: "center"
  },

  textView: {
    color: "white",
    alignSelf: "center"
  },

  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 16,
    color: 'white'
  },
  
});

export default styles;

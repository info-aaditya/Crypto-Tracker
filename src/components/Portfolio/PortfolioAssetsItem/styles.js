import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Balance Container
  container : {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },

  imageView: {
    height: 30,
    width: 30,
  },

  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  ticker: {
    color: 'grey',
    fontWeight: "600"
  },

  // Percentage Container
  percentageContainer: {
    flexDirection: "row",
  },

  icons: {
    alignSelf: "center",
    marginRight: 5,
  },
  
  percentageChange: {
    color: '#16c784',
    fontSize: 18,
    fontWeight: '500',
  },

  // Quantity Container
  quantityContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  
});

export default styles;

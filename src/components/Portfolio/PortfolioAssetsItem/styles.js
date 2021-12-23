import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Balance Container
  container : {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#121212",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
  },

  imageView: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: "center",
  },

  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },

  ticker: {
    color: 'grey',
    fontWeight: "600"
  },

  // Percentage Change Container
  percentageChangeContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },

  percentageContainer: {
    flexDirection: "row",
  },

  icons: {
    alignSelf: "center",
    marginRight: 5,
  },
  
  percentageChange: {
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

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header
  headerContainer: {
    flexDirection: "row",
    margin: 5,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  
  titleText: {
    color: "white",
    fontSize: 20,
  },

  // Searchable DropDown
  searchContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  searchItem: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 5,
  },

  searchItemText: {
    color: "white",
  },

  searchInput: {
    padding: 12,
    color: "white",
    backgroundColor: "#1e1e1e",
    borderColor: "#444444",
    borderWidth: 1.5,
    borderRadius: 9,
  },

  // Quantity Container
  quantityContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 45,
  },

  inputContainer: {
    flexDirection: "row",
  },

  inputText: {
    color: 'white',
    fontSize: 90,
  },

  ticker: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 25,
    marginLeft: 10,
  },

  priceView: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  // Bottom Container
  buttomContainer: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 70,
    borderRadius: 8,
  },

  buttomText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  
});

export default styles;

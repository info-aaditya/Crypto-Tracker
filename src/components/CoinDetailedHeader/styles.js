import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ticker: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageView: {
    width: 25,
    height: 25,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },

  rank: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5, 
  },

  rankText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

});

export default styles;

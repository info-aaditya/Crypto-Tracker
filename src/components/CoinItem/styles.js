import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },

  imageView: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: "center",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },

  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },

  rank: {
    fontWeight: 'bold',
    color: 'white',
  },

  text: {
    color: "white",
    marginRight: 5,
  },

  current: { 
    alignSelf: "center",
    marginRight: 5
  },

  market: {
    marginLeft: "auto",
    alignItems: 'flex-end'
   },

});

export default styles;
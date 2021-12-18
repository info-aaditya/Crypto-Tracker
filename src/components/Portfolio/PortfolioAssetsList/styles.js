import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  // Balance Container
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },

  currentBalance: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  currentBalanceValue: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 1,
  },

  valueChange: {
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 0.25,
  },

  // Percentage Container
  percentageContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 5,
  },

  icons: {
    alignSelf: "center",
    marginRight: 5,
  },
  
  percentageChange: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },

  assetsView: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
     paddingHorizontal: 10,
     paddingVertical: 20,
  },

  // Buttom Container
  buttomContainer: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 10,
    borderRadius: 8,
  },

  buttomText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  
});

export default styles;

import { StatusBar, StyleSheet } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
    marginTop: StatusBar.currentHeight || 0,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  ropw:{
    flex:1,
    justifyContent: 'space-between'
  }
});
export default styles;

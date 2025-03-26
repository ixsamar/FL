import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    marginTop: hp("1%"),
    marginHorizontal: hp("-2%"),
  },
  searchBox: {
    flexDirection: "row",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1%"),
    marginBottom: hp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: "#ccc",
    justifyContent: "space-between",
  },
  searchInput: {
    fontSize: hp("2%"),
    flex: 1,
  },
  clearButton: {
    alignSelf: "center",
  },
  itemContainer: {
    paddingVertical: hp("0.5%"),
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTextContainer: {
    flexDirection: "row",
    marginLeft: wp("4%"),
  },
  itemCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: hp("6%"),
    height: hp("6%"),
    borderRadius: hp("3%"),
    borderWidth: wp("0.5%"),
  },
  itemCircleText: {
    fontSize: hp("2.5%"),
  },
  itemLanguageName: {
    fontSize: hp("2%"),
    alignSelf: "center",
    marginLeft: wp("2%"),
  },
  selectionIndicator: {
    alignSelf: "center",
    marginRight: hp("2.5%"),
  },
  logoImage: {
    borderRadius: hp("2.5%"),
    alignSelf: "center",
    resizeMode: "cover",
  },
});

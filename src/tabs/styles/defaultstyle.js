import { Dimensions } from "react-native";

export default {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  itemContainer: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3
  },
  item: {
    flex: 1,
    margin: 3
  }
};

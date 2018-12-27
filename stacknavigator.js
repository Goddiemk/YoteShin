import Fetch from "./api/getdata";
import Details from "./navigations/showing";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    SettingScreen: { screen: Fetch },
    HomeScreen: { screen: Details }
  },
  {
    initialRouteName: "SettingScreen"
  }
);

const Ap = createAppContainer(AppNavigator);
export default Ap;

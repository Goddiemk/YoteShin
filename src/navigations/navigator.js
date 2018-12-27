import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  TabBarBottom,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import FetchShowing from "../tabs/getshowing";
import FetchUpcoming from "../tabs/getupcoming";
import FetchCinema from "../tabs/getcinema";
import AboutScreen from "../tabs/about";
import ShowingDetails from "./showing";
import UpcomingDetails from "./upcoming";
import CinemaDetails from "./cinema";

const ShowingNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: FetchShowing,
      navigationOptions: {
        title: "Yote Shin",
        headerTitleStyle: { textAlign: "center", flex: 1 }
      }
    },
    DetailScreen: {
      screen: ShowingDetails,
      navigationOptions: {
        title: "Back",
        headerTitleStyle: { textAlign: "left", flex: 1 }
      }
    }
  },
  {
    headerMode: "float",
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "gold" }
    }
  }
);

const UpcomingNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: FetchUpcoming,
      navigationOptions: {
        title: "Yote Shin",
        headerTitleStyle: { textAlign: "center", flex: 1 }
      }
    },
    UpDetailScreen: {
      screen: UpcomingDetails,
      navigationOptions: {
        title: "Back",
        headerTitleStyle: { textAlign: "left", flex: 1 }
      }
    }
  },
  {
    headerMode: "float",
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "gold" }
    }
  }
);

const CinemaNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: FetchCinema,
      navigationOptions: {
        title: "Yote Shin",
        headerTitleStyle: { textAlign: "center", flex: 1 }
      }
    },
    CinemaDetailScreen: {
      screen: CinemaDetails,
      navigationOptions: {
        title: "Back",
        headerTitleStyle: { textAlign: "left", flex: 1 }
      }
    }
  },
  {
    headerMode: "float",
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "gold" }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Showing: { screen: ShowingNavigator },
    Upcoming: { screen: UpcomingNavigator },
    Cinema: { screen: CinemaNavigator },
    About: { screen: AboutScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Showing") {
          iconName = "ios-film";
        }
        if (routeName === "Upcoming") {
          iconName = "ios-calendar";
        }
        if (routeName === "Cinema") {
          iconName = "ios-cash";
        }
        if (routeName === "About") {
          iconName = "ios-information";
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: { backgroundColor: "gold" }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const AppContainer = createAppContainer(TabNavigator);

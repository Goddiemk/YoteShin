import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles/cinemastyle";

export default class CinemaDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const cinema = navigation.getParam("cinema");
    return (
      <View>
        <View style={styles.aboutCinema}>
          <Text style={styles.cinemaName}>{cinema.name}</Text>
          <View style={styles.cinemaDetailView}>
            <Text>{cinema.city}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.nowShowing}>Now Showing</Text>
      </View>
    );
  }
}

import React from "react";
import styles from "./styles/defaultstyle";
import * as api from "../api/api";
import { View, FlatList, Image, TouchableHighlight } from "react-native";

export default class FetchShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData();
  }

  getData = async () => {
    Movies = [];
    CinemaCodes = [];
    CinemaDetails = [];
    CinemaPhones = [];
    const movies = await api.getShowing();
    const cinemas = await api.getCinema();
    cinemas.map((val, key) => {
      CinemaCodes[key] = val.cinema_code;
    });
    cinemas.map((val, key) => {
      CinemaDetails[CinemaCodes[key]] = val;
      CinemaPhones[key] = val.phone.split("^");
    });
    movies.map((val, key) => {
      Movies.push({
        movie_title: val.movie_title,
        image: val.poster_large,
        movie_info: val.movie_info,
        cinema_info: CinemaDetails,
        cinema_phone: CinemaPhones
      });
    });
    this.setState({
      data: Movies
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableHighlight
                style={styles.item}
                onPress={() => {
                  this.props.navigation.navigate("DetailScreen", {
                    movie: item
                  });
                }}
              >
                <Image style={styles.item} source={{ uri: item.image }} />
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={item => item.movie_title}
          numColumns={3}
        />
      </View>
    );
  }
}

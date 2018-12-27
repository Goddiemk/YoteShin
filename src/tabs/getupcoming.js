import React from "react";
import styles from "./styles/defaultstyle";
import * as api from "../api/api";
import { View, FlatList, Image, TouchableHighlight } from "react-native";

export default class FetchUpcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData();
  }

  getData = async () => {
    const upmovies = await api.getUpcoming();
    this.setState({
      data: upmovies
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
                  this.props.navigation.navigate("UpDetailScreen", {
                    upmovie: item
                  });
                }}
              >
                <Image style={styles.item} source={{ uri: item.poster_url }} />
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

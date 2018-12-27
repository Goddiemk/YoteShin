import React, { Component } from "react";
import styles from "./styles/upcomingstyle";
import YouTube from "react-native-youtube";
import { View, Image, Text, ScrollView } from "react-native";
import ReadMore from "react-native-read-more-text";

export default class UpcomingDetails extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { navigation } = this.props;
    const upmovie = navigation.getParam("upmovie");
    return (
      <ScrollView style={styles.container}>
        <View style={styles.intro}>
          <Image style={styles.image} source={{ uri: upmovie.poster_url }} />
          <View style={styles.movie_detail}>
            <Text style={styles.movie_title_text}>{upmovie.movie_title}</Text>
            <Text style={styles.movie_tagline_text}>
              {upmovie.movie_info.tagline}
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.story}>
          <Text style={styles.movie_story_text}>Movie Story</Text>
          <View style={styles.movie_story_text_details}>
            <ReadMore numberOfLines={3}>
              <Text>{upmovie.movie_info.overview}</Text>
            </ReadMore>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.showing_text}>Movie Trailer</Text>
          </View>
          <YouTube
            apiKey="AIzaSyAc62-9gZfzW4ZCku1Ox9rCWzoikoqEbhI"
            videoId={upmovie.movie_info.movie_trailer_url}
            style={{ height: 150 }}
          />
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Langauage</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.language}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Subtitle</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.subtitle}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Director</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.director}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Runtime</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.runtime}mins
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Certification</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.certification}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Genre</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.genre.map(
                (val, index) => (index ? ", " : "") + val
              )}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.listview}>
            <Text style={styles.listview_title_text}>Casts</Text>
            <Text style={styles.listview_text}>
              {upmovie.movie_info.cast.map(
                (val, index) => (index ? ", " : "") + val
              )}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

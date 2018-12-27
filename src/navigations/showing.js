import React, { Component } from "react";
import YouTube from "react-native-youtube";
import { View, Image, Text, Modal, Button, ScrollView } from "react-native";
import ReadMore from "react-native-read-more-text";
import styles from "./styles/showingstyle";

export default class ShowingDetails extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.readmore} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.readmore} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  _handleTextReady = () => {
    // ...
  };

  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("movie");
    return (
      <View style={styles.container}>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <View style={styles.modal}>
              <ScrollView style={styles.scrollcontainer}>
                <View style={styles.modal_info_view}>
                  <Text style={styles.modal_movie_info}>Movie info</Text>
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Language
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.language}
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Subtitle
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.subtitle}
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Director
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.director}
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Runtime
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.runtime} mins
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Certification
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.certification}
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Genre
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.genre.map(
                        (val, index) => (index ? ", " : "") + val
                      )}
                    </Text>
                  </View>
                  <View style={styles.modal_line} />
                  <View style={styles.modal_movie_info_view}>
                    <Text style={styles.modal_movie_info_title_text}>
                      Casts
                    </Text>
                    <Text style={styles.modal_movie_info_text}>
                      {movie.movie_info.cast.map(
                        (val, index) => (index ? ", " : "") + val
                      )}
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <View style={styles.closeButton}>
                <Button onPress={this.closeModal} title="Close" />
              </View>
            </View>
          </Modal>

          <View style={styles.intro}>
            <Image style={styles.image} source={{ uri: movie.image }} />
            <View style={styles.movie_detail}>
              <View>
                <Text style={styles.movie_title_text}>{movie.movie_title}</Text>
              </View>
              <View style={styles.movie_detail_view}>
                <Text style={styles.movie_detail_view_text}>
                  {movie.movie_info.language}
                </Text>
                <Text style={styles.movie_detail_view_text}>
                  {movie.movie_info.runtime} mins
                </Text>
                <Text
                  style={styles.detailbutton}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                >
                  Detail
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.story}>
            <Text style={styles.movie_story_text}>Movie Story</Text>
            <View style={styles.readmore_text}>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}
              >
                <Text>{movie.movie_info.overview}</Text>
              </ReadMore>
            </View>
          </View>
          <View style={styles.line} />
          <YouTube
            apiKey="AIzaSyAc62-9gZfzW4ZCku1Ox9rCWzoikoqEbhI"
            videoId={movie.movie_info.movie_trailer_url}
            style={styles.youtube_view}
          />
          <View style={styles.line} />
          <Text style={styles.now_showing}>Now Showing In</Text>
          <View style={styles.cinemas}>
            {movie.movie_info.show_times.map((val, key) => (
              <View key={key}>
                <View style={styles.cinema_view}>
                  <View style={styles.cinema_detail}>
                    <Text style={styles.cinema_name_text}>
                      {movie.cinema_info[val.cinema_code].name}
                    </Text>
                    <Text>{movie.cinema_info[val.cinema_code].city}</Text>
                    <Text>
                      {val.times.map((time, index) => (
                        <Text key={index}>{time} , </Text>
                      ))}
                    </Text>
                  </View>
                </View>
                <View style={styles.line} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

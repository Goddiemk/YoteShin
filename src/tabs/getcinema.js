import React from "react";
import styles from "./styles/cinema";
import * as api from "../api/api";
import { View, Text, TouchableHighlight, ScrollView } from "react-native";

import Accordion from "react-native-collapsible/Accordion";
import _ from "lodash";

export default class FetchCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeSections: []
    };
    this.getData();
  }

  getData = async () => {
    Cinemas = [];
    const cinemas = await api.getCinema();
    Cities = [...new Set(cinemas.map(cinema => cinema.city))];

    const CinemaDetailsByCities = _.groupBy(cinemas, "city");
    Cities.map((city, key) =>
      Cinemas.push({
        city: city,
        detail: CinemaDetailsByCities[city].sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      })
    );
    this.setState({
      data: Cinemas
    });
  };

  _renderHeader = rowData => {
    return (
      <View style={styles.row}>
        <View style={styles.line} />
        <View style={styles.accordionHeaderView}>
          <Text style={styles.boldLabel}>{rowData.city}</Text>
        </View>
      </View>
    );
  };

  _renderContent(rowData, navigation) {
    return (
      <View>
        {rowData.detail.map((cinema_info, key) => (
          <TouchableHighlight
            key={key}
            onPress={() =>
              navigation.navigate("CinemaDetailScreen", {
                cinema: cinema_info
              })
            }
          >
            <View>
              <Text style={styles.boldLabelDetail}>{cinema_info.name}</Text>
              <Text style={styles.movieCount}>
                {cinema_info.movies.length} Movies
              </Text>
              {key !== rowData.detail.length - 1 ? (
                <View style={styles.accordionLine} />
              ) : null}
            </View>
          </TouchableHighlight>
        ))}
      </View>
    );
  }

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Accordion
          sections={this.state.data}
          activeSections={this.state.activeSections}
          renderHeader={item => this._renderHeader(item)}
          renderContent={item =>
            this._renderContent(item, this.props.navigation)
          }
          onChange={this._updateSections}
        />
      </ScrollView>
    );
  }
}

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default {
  container: {
    flex: 1
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  intro: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  story: {
    flexDirection: "column",
    margin: 3,
    justifyContent: "space-around"
  },
  image: {
    width: wp("27%"),
    height: hp("20%"),
    marginTop: 6,
    marginRight: 6
  },
  movie_detail: {
    flexDirection: "column",
    marginTop: 3,
    marginBottom: 3,
    justifyContent: "space-around",
    width: wp("63%")
  },
  movie_title_text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 3
  },
  movie_story_text: {
    fontWeight: "bold",
    margin: 10
  },
  movie_story_text_details: {
    margin: 10
  },
  movie_tagline_text: {
    fontSize: 13,
    lineHeight: 25
  },
  showing_text: {
    margin: 10,
    fontWeight: "bold"
  },
  test2: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  touchable: {
    backgroundColor: "#DDDDDD",
    height: 25,
    width: 45
  },
  listview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  listview_title_text: {
    margin: 10
  },
  listview_text: {
    textAlign: "right",
    width: wp("40%"),
    marginRight: 10
  }
};

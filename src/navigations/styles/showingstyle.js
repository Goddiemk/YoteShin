import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default {
  container: {
    flex: 1
  },
  cinema_view: {
    flexDirection: "row",
    margin: 3
  },
  cinema_detail: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    width: wp("82%")
  },
  scrollcontainer: {
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
    alignItems: "center",
    marginBottom: 5
  },
  story: {
    flexDirection: "column",
    margin: 3,
    justifyContent: "space-around"
  },
  cinemas: {
    marginTop: 10,
    marginLeft: 15
  },
  image: {
    width: wp("23%"),
    height: hp("18%")
  },
  movie_detail: {
    flexDirection: "column",
    marginTop: 3,
    marginBottom: 3,
    justifyContent: "space-around",
    width: wp("63%")
  },
  movie_detail_view: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 3,
    justifyContent: "space-around"
  },
  movie_detail_view_text: {
    fontSize: 14,
    marginRight: 20,
    lineHeight: 25
  },
  movie_title_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    margin: 14
  },
  movie_story_text: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  movie_story_text_details: {
    margin: 10
  },
  now_showing: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  showing_text: {
    margin: 10,
    fontWeight: "bold"
  },

  detailbutton: {
    fontSize: 14,
    color: "blue",
    marginRight: 20,
    lineHeight: 25
  },
  readmore: {
    marginTop: 5
  },
  readmore_text: {
    margin: 10
  },
  cinema_name_text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  modal: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: hp("20%"),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("90%"),
    height: hp("60%")
  },
  modal_info_view: {
    flexDirection: "column",
    width: wp("100%")
  },
  modal_movie_info: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10
  },
  modal_movie_info_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 7
  },
  modal_movie_info_title_text: {
    marginLeft: 10
  },
  modal_movie_info_text: {
    textAlign: "right",
    width: wp("40%"),
    marginRight: 60
  },
  modal_movie_info_text_view: {
    alignItems: "flex-end",
    width: wp("40%")
  },
  modal_line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  closeButton: {
    width: wp("90%")
  },
  youtube_view: {
    height: 150
  }
};

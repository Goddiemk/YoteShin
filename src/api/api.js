export async function getCinema() {
  try {
    const response = await fetch(
      "http://appapi.yoteshinapp.com/api/cinemas?font_name=unicode",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic eTB0M3NoMW5jbDEzbnQweDEyNDpXYzcyY2dqLTk3YXA4Yypr"
        }
      }
    );
    const cinema = await response.json();
    return cinema;
  } catch (error) {
    console.error(error);
  }
}

export async function getShowing() {
  try {
    const response = await fetch(
      "http://appapi.yoteshinapp.com/api/schedules?status=showing&font_name=unicode",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic eTB0M3NoMW5jbDEzbnQweDEyNDpXYzcyY2dqLTk3YXA4Yypr"
        }
      }
    );
    const showing = await response.json();

    return showing;
  } catch (error) {
    console.error(error);
  }
}

export async function getUpcoming() {
  try {
    const response = await fetch(
      "http://appapi.yoteshinapp.com/api/schedules?status=upcoming&font_name=unicode",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic eTB0M3NoMW5jbDEzbnQweDEyNDpXYzcyY2dqLTk3YXA4Yypr"
        }
      }
    );
    const upcoming = await response.json();

    return upcoming;
  } catch (error) {
    console.error(error);
  }
}
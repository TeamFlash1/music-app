function writeToHistory() {
  const localStorageItems = {
    ...localStorage
  };

  $("#searchHistory").empty();

  Object.keys(localStorageItems).map((obj) => {
    $("#searchHistory").append(
      `<li class="savedEntries" id="${decodeURI(obj)}">${decodeURI(obj)}</li>`
    );
  });
}

$(document).ready(function () {
  $(document).on("click", "#searchTickets", function () {
    $(".events").remove();
    var myArtist = $("#artist").val();
    $.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=${myArtist}&apikey=XODtjbJtOVAMy9okrsnHBIBmrRGV1Upk`,
      function (mydata) {
        if (!mydata) {
          $("#myCalendar").append(
            "<p>No tickets or events found for that artist</p>"
          );
        }
        console.log("mydata", mydata._embedded.events);
        $("#myCalendar").append(
          mydata._embedded.events.map((event) => {
            return `<div class="events"><img class="eventImage" src="${event.images[0].url}"/><p class="eventName">${event.name}</p></div>`;
          })
        );
      }
    );
  });

  $(document).on("click", ".savedEntries", function () {
    var searchTerm = decodeURI($(this).text());
    var myObject = Object.keys(localStorageItems).find(
      (obj) => obj === searchTerm
    );
    var data = localStorage.getItem(myObject);
    var artistAndSong = Object.values(searchTerm.split(":"));
    var artist = artistAndSong[0];
    var song = artistAndSong[1].replace(/\s/g, "");
    $("#artist").val(artist);
    $("#song").val(song);
    $("#myLyrics").text(data);
    $("#myLink").html(
      `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
    );
    $("#myEvents").html(
      '<button id="SearchTickets" type="text">Find tickets</button>'
    );
  });

  $("#search").click(function () {
    var artist = encodeURI($("#artist").val());
    var song = encodeURI($("#song").val());
    $(".events").remove();


    $.get(
      `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
      function (data) {
        var subString = data.replace("callback(", "");
        var jsonString = subString.replace(");", "");
        var lyrics = JSON.parse(jsonString);
        $("#myLyrics").text(lyrics.message.body.lyrics.lyrics_body);
        localStorage.setItem(
          `${artist}: ${song}`,
          lyrics.message.body.lyrics.lyrics_body
        );
        writeToHistory();
        $("#myLink").html(
          `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">🎧 Listen 🎧</a>`
        );
        $("#myEvents").html(
          '<button id="searchTickets" type="text">Find tickets</button>'
        );
      }
    );
    $("#artist")[0].value = "";
    $("#song")[0].value = "";
  });

  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      var artist = encodeURI($("#artist").val());
      var song = encodeURI($("#song").val());
      $(".events").remove();

      $.get(
        `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
        function (data) {
          var subString = data.replace("callback(", "");
          var jsonString = subString.replace(");", "");
          var lyrics = JSON.parse(jsonString);
          $("#myLyrics").text(lyrics.message.body.lyrics.lyrics_body);
          localStorage.setItem(
            `${artist}: ${song}`,
            lyrics.message.body.lyrics.lyrics_body
          );
          writeToHistory();
          $("#myLink").html(
            `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
          );
          $("#myEvents").html(
            '<button id="searchTickets" type="text">Find tickets</button>'
          );
        }
      );
      $("#artist")[0].value = "";
      $("#song")[0].value = "";
    }
  });
});

writeToHistory();
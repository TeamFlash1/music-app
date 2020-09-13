$(document).ready(function () {
  const localStorageItems = { ...localStorage };

  Object.keys(localStorageItems).map((obj) => {
    $("#SearchHistory").append(
      `<li class="savedEntries" id="${decodeURI(obj)}">${decodeURI(obj)}</li>`
    );
  });

  $(document).on("click", "#SearchTickets", function () {
    $(".events").remove();
    var myArtist = $("#Artist").val();
    $.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=${myArtist}&apikey=XODtjbJtOVAMy9okrsnHBIBmrRGV1Upk`,
      function (mydata) {
        console.log("mydata", mydata._embedded.events);
        $("#MyCalendar").append(
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
    $("#Artist").val(artist);
    $("#Song").val(song);
    $("#MyLyrics").text(data);
    $("#MyLink").html(
      `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
    );
    $("#MyEvents").html(
      '<button id="SearchTickets" type="text">Find tickets</button>'
    );
  });

  $("#Search").click(function () {
    var artist = encodeURI($("#Artist").val());
    var song = encodeURI($("#Song").val());

    $.get(
      `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
      function (data) {
        var subString = data.replace("callback(", "");
        var jsonString = subString.replace(");", "");
        var lyrics = JSON.parse(jsonString);
        $("#MyLyrics").text(lyrics.message.body.lyrics.lyrics_body);
        localStorage.setItem(
          decodeURI(
            `${artist}: ${song}`,
            lyrics.message.body.lyrics.lyrics_body
          )
        );
        $("#MyLink").html(
          `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
        );
        $("#MyEvents").html(
          '<button id="SearchTickets" type="text">Find tickets</button>'
        );
      }
    );
  });

  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      var artist = encodeURI($("#Artist").val());
      var song = encodeURI($("#Song").val());

      $.get(
        `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
        function (data) {
          var subString = data.replace("callback(", "");
          var jsonString = subString.replace(");", "");
          var lyrics = JSON.parse(jsonString);
          $("#MyLyrics").text(lyrics.message.body.lyrics.lyrics_body);
          localStorage.setItem(
            `${artist}: ${song}`,
            lyrics.message.body.lyrics.lyrics_body
          );
          $("#MyLink").html(
            `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
          );
          $("#MyEvents").html(
            '<button id="SearchTickets" type="text">Find tickets</button>'
          );
        }
      );
    }
  });
});

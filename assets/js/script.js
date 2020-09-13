$(document).ready(function () {
    const localStorageItems = {
        ...localStorage
    };

    Object.keys(localStorageItems).map((obj) => {
        $("#searchHistory").append(
            `<li class="searchHistory" id="${decodeURI(obj)}">${decodeURI(obj)}</li>`
        );
    });

    $(document).on("click", "#searchTickets", function () {
        var myArtist = $("#artist").val();
        $.get(
            `https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=${myArtist}&apikey=XODtjbJtOVAMy9okrsnHBIBmrRGV1Upk`,
            function (mydata) {
                console.log("mydata", mydata._embedded.events);
                $("#myCalendar").append(
                    mydata._embedded.events.map((event) => {
                        return `<div class="events"><img class="eventImage" src="${event.images[0].url}"/><p class="eventName">${event.name}</p></div>`;
                    })
                );
            }
        );
    });

    $("#search").click(function () {
        var artist = encodeURI($("#artist").val());
        var song = encodeURI($("#song").val());

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
                 $("#myLink").html(
                    `<button class="myLink" id="myLink" type="text"><a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">🎧 Listen 🎧</button>`
                );
               /* $("#myLink").html(
                    `<a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">Listen</a>`
                );*/
                $("#myEvents").html(
                    '<button class="searchTickets" id="searchTickets" type="text">🔍 Find Tickets 🔍</button>'
                );
            }
        );
    });
});
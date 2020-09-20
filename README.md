# Flash Beats

A site where you can search for music by artist and song title. The search result will let you play the song and see the lyrics.

> Screenshot of app

## Find your beat!

[GitHub Page](https://teamflash1.github.io/music-app)

[GitHub Repo](https://github.com/TeamFlash1/music-app)
body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    color: #717074;
}

main {
    display: flex;
}

/* page title section */
.top-bar-left {
    background-image: url('../svg/abstractBeats.gif');
    background-position: 50%;
    background-size: cover;
    border: 5px solid white;
    border-radius: 5px;
}

.top-bar-left h2,
h5 {
    display: flex;
    justify-content: center;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 10px rgb(255, 255, 255);
}

.top-bar-left h2 {
    font-size: 75px;
}

/* title animation */
.top-bar-left h2 span {
    animation: animate 1.5s linear infinite;
}

.top-bar-left h2 span:nth-child(1) {
    animation-delay: 0s;
}

.top-bar-left h2 span:nth-child(2) {
    animation-delay: 0.2s;
}

.top-bar-left h2 span:nth-child(3) {
    animation-delay: 0.4s;
}

.top-bar-left h2 span:nth-child(4) {
    animation-delay: 0.6s;
}

.top-bar-left h2 span:nth-child(5) {
    animation-delay: 0.8s;
}

.top-bar-left h2 span:nth-child(6) {
    animation-delay: 1s;
}

.top-bar-left h2 span:nth-child(7) {
    animation-delay: 1.2s;
}

.top-bar-left h2 span:nth-child(8) {
    animation-delay: 1.4s;
}

.top-bar-left h2 span:nth-child(9) {
    animation-delay: 1.6s;
}

.top-bar-left h2 span:nth-child(10) {
    animation-delay: 1.8s;
}

@keyframes animate {
    0% {
        transform: translateY(0px);
    }
    10% {
        transform: translateY(-30px);
    }
    15% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-20px);
    }
    30% {
        transform: translateY(0px);
    }
    40% {
        transform: translateY(-10px);
    }
    45% {
        transform: translateY(0px);
    }
}

/* user search section */
#search-text {
    color: rebeccapurple;
    font-size: x-large;
    padding-right: 10px;
}

.search-field {
    display: flex;
    justify-content: center;
    padding: 5px 0 5px 0;
}

.artist,
.song {
    border: 1px solid gray;
    border-radius: 5px;
}

/* recently search and result sections */
.search-panel,
.results-panel {
    margin: 15px;
}

.searchTitle {
    margin: 10px;
    font-weight: bold;
    text-decoration: underline;
}

.search-panel {
    width: 30%;
    border-right: 1px solid #2b8693;
    background-color: rgb(255, 51, 51, 0.5);
}

.search-panel h3 {
    background-color: rgb(255, 51, 51, 0.5);
    padding-left: 10px;
}

.recently-searched-box {
    padding-left: 10px;
}

.results-panel {
    background-color: rgb(77, 184, 255, 0.4);
    text-align: center;
    width: 70%;
}

.results-panel h3 {
    background-color: rgb(77, 184, 255, 0.6);
}

.results-box h4 {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.wrapper {
    /* background-color: red; */
    margin: 0 auto;
    width: 50%;
}

.myLyrics {
    line-height: 1.6;
    text-align: left;
    white-space: pre-wrap;
    margin: 20px 10px;
    padding: 5px;
    white-space: pre-wrap;
}

.nav-bar {
    border-bottom: 3px solid black;
}

#songName,
#artistName {
    text-transform: uppercase;
}

/* Button Styles */
/* From Jim: I swapped out the cadet blue for a hex value I was able to obtain from the flashbeats image */
.searchBtn,
.ticketButton,
.myLink {
    margin-top: 5px;
    border-radius: 5px;
    padding: 10px;
    background-color: #2b8693;
    font-weight: bold;
    color: white;
}

.myLink a {
    color: white;
}

.searchBtn {
    width: 45%;
}

#searchTickets {
    width: 25%;
}

.myLink {
    width: 25%;
}

#myLink,
#myLyrics,
#myEvents,
#myCalendar {
    display: flex;
    justify-content: center;
}

/*added Button Hover */

.myLink:hover,
button:hover,
a.selected {
    background-color: salmon;
}

/* myEvents section */
.myEvents {
    display: flex;
    justify-content: left;
    margin: 10px;
}

.events {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.eventImage {
    width: 150px;
    height: auto;
    margin-right: 20px;
}

.eventName {
    font-size: 22px;
}

.innerLink {
    background: transparent;
    border: none;
}

.savedEntries {
    cursor: pointer;
}

/* footer style */
footer {
    background: lightgray;
    width: 100%;
    padding: 40px 35px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

footer h2 {
    color: cadetblue;
    font-size: 20px;
    margin: 0;
}

footer h2 span {
    font-weight: bold;
}

footer div {
    line-height: 1.5;
    text-align: right;
}

footer div span {
    color: cadetblue;
}

footer h2,
footer div {
    text-align: center;
    width: 100%;
}

.savedEntries:hover {
    background: #2b8693;
    color: white;
    font-weight: bold;
}

#searchHistory {
    list-style: none;
    margin-left: 0;
}

.clearSearchWrapper {
    text-align: center;
    width: 100%;
    min-height: 50px;
}

.removeButton {
    width: 200px;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    color: white;
    background: transparent;
    font-weight: bold;
    margin: 0px auto;
    margin-bottom: 20px;
    line-height: 1;
    cursor: pointer;
    padding: 10px 20px;
}

.removeButton:hover {
    color: white;
    font-weight: bold;
}

.removeSearches {
    background: #2b8693;
    border-radius: 20px;
    color: white;
    padding: 10px 20px;
}

#confirmationMessage {
    display: none;
    margin-top: 30px;
}







function writeToHistory() {
    const localStorageItems = {
        ...localStorage,
    };

    $('#searchHistory').empty();

    Object.keys(localStorageItems).map((obj) => {
        $('#searchHistory').append(
            `<li class="savedEntries" id="${decodeURI(obj)}">${decodeURI(obj)}</li>`
        );
    });
}

$(document).ready(function () {
    const localStorageItems = { ...localStorage };

    writeToHistory();

    $(document).on('click', '#searchTickets', function () {
        $('.events').remove();
        $('.noTickets').text('');
        var myArtist = $('#artist').val();
        $.get(
            `https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=${myArtist}&apikey=XODtjbJtOVAMy9okrsnHBIBmrRGV1Upk`,
            function (mydata) {
                if (!mydata || !mydata._embedded) {
                    $('#myCalendar').append(
                        "<p class='noTickets'>No tickets or events found for that artist</p>"
                    );
                    return null;
                }
                $('#myCalendar').append(
                    mydata._embedded.events.map((event) => {
                        return `<div class="events"><img class="eventImage" src="${event.images[0].url}"/><p class="eventName">${event.name}</p></div>`;
                    })
                );
            }
        );
    });

    $(document).on('click', '.savedEntries', function () {
        var searchTerm = decodeURI($(this).text());
        var revisedLocalStorage = {
            ...localStorage,
        };
        $('.noTickets').text('');
        $('.events').remove();
        var myObject = Object.keys(revisedLocalStorage).find(
            (obj) => obj === searchTerm
        );
        var data = localStorage.getItem(myObject);
        var artistAndSong = Object.values(searchTerm.split(':'));
        var artist = artistAndSong[0];
        var song = artistAndSong[1].replace(/\s/g, '');
        $('#artist').val(artist);
        $('#song').val(song);
        $('#myLyrics').text(data);
        $('#myLink').html(
            `<button class="myLink" id="myLink" type="text"><a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">🎧 Listen 🎧</a></button>`
        );
        $('#myEvents').html(
            '<button class="ticketButton" id="searchTickets" type="text">🔍 Find tickets 🔍</button>'
        );
    });

    $('#search').click(function () {
        var artist = encodeURI($('#artist').val());
        var song = encodeURI($('#song').val());
        $('.events').remove();
        $('.noTickets').text('');

        $.get(
            `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
            function (data) {
                var subString = data.replace('callback(', '');
                var jsonString = subString.replace(');', '');
                var lyrics = JSON.parse(jsonString);
                $('#myLyrics').text(lyrics.message.body.lyrics.lyrics_body);
                localStorage.setItem(
                    `${decodeURI(artist)}: ${decodeURI(song)}`,
                    decodeURI(lyrics.message.body.lyrics.lyrics_body)
                );
                writeToHistory();
                $('#confirmationMessage').hide();
                $('#myLink').html(
                    `<button class="myLink" id="myLink" type="text"><a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">🎧 Listen 🎧</a></button>`
                );
                $('#myEvents').html(
                    '<button class="ticketButton" id="searchTickets" type="text">🔍 Find tickets 🔍</button>'
                );
                $('#artist').val('');
                $('#song').val('');
                writeToHistory();
            }
        );
    });

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            var artist = encodeURI($('#artist').val());
            var song = encodeURI($('#song').val());
            $('.events').remove();
            $('.noTickets').text('');

            $.get(
                `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=8e5d38bc326c0567033e2db2442c6afb`,
                function (data) {
                    var subString = data.replace('callback(', '');
                    var jsonString = subString.replace(');', '');
                    var lyrics = JSON.parse(jsonString);
                    $('#myLyrics').text(lyrics.message.body.lyrics.lyrics_body);
                    localStorage.setItem(
                        `${decodeURI(artist)}: ${decodeURI(song)}`,
                        decodeURI(lyrics.message.body.lyrics.lyrics_body)
                    );
                    writeToHistory();
                    $('#confirmationMessage').hide();
                    $('#myLink').html(
                        `<button class="myLink" id="myLink" type="text"><a href="https://www.youtube.com/results?search_query=${artist}+${song}" target="_blank">🎧 Listen 🎧</a></button>`
                    );
                    $('#myEvents').html(
                        '<button class="ticketButton" id="searchTickets" type="text">🔍 Find tickets 🔍</button>'
                    );
                    $('#artist').val('');
                    $('#song').val('');
                    writeToHistory();
                }
            );
        }
    });

    $('#removeSearchHistory').click(function () {
        localStorage.clear();
        writeToHistory();
        $('#myLink').html('');
        $('#myEvents').html('');
        $('#myLyrics').text('');
        $('#myCalendar').empty();
        $('#confirmationMessage').show();
    });
});




<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Compressed CSS -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
            integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I="
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
            integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />

        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
        />

        <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
            rel="stylesheet"
        />

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css"
        />

        <link rel="stylesheet" href="assets/css/style.css" />
        <title>Flash Beats</title>
    </head>

    <body>
        <header class="nav-bar">
            <div class="top-bar">
                <div class="top-bar-left">
                    <h2>
                        <span>F</span>
                        <span>l</span>
                        <span>a</span>
                        <span>s</span>
                        <span>h</span>
                        <span>B</span>
                        <span>e</span>
                        <span>a</span>
                        <span>t</span>
                        <span>s</span>
                    </h2>
                    <h5>Come jam with us!</h5>
                </div>
                <div class="top-bar-right">
                    <div class="pure-form menu search-field">
                        <input
                            type="text"
                            class="artist"
                            id="artist"
                            placeholder="type artist name"
                        />
                        <input
                            type="text"
                            class="song"
                            id="song"
                            placeholder="type song name"
                        />
                        <button class="searchBtn" id="search">🎵 Search 🎵</button>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="search-panel">
                <h3>Recently Searched</h3>
                <div class="recently-searched-box">
                    <p class="searchTitle">Artist: Song Name</p>
                    <ul id="searchHistory"></ul>
                </div>
                <div class="clearSearchWrapper">
                    <a
                        id="removeSearchHistoryButton"
                        class="removeButton"
                        href="#ex1"
                        rel="modal:open"
                    >
                        Clear Searches
                    </a>
                </div>
            </section>

            <section class="results-panel">
                <h3>Results</h3>
                <div class="results-box">
                    <ul id="search-results"></ul>
                    <h4><span id="artistName"></span> <span id="songName"></span></h4>
                    <div class="" id="myLink"></div>
                    <div class="myLyrics" id="myLyrics"></div>
                    <div class="myEvents" id="myEvents"></div>
                    <div id="myCalendar"></div>
                </div>
            </section>
        </main>
        <div id="ex1" class="modal">
            <p>Are you sure you'd like to remove your search history?</p>
            <button id="removeSearchHistory" class="removeSearches">
                Yes, please remove.
            </button>
            <p id="confirmationMessage">
                The history is now empty, please close this window
            </p>
            <!-- <a href="#" rel="modal:close">Close</a> -->
        </div>

        <footer>
            <h2>
                <span>Made by the Developer Jockeys:</span> James, Ida, Owais and Mario.
            </h2>
            <div>
                <a href="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif"
                    >Read Our Privacy Policy</a
                ><br />
                <span>&copy; 2020 Flash Beats</span>
            </div>
        </footer>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script
            type="text/javascript"
            src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"
        ></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>

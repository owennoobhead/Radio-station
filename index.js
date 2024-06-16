document.addEventListener("DOMContentLoaded", function (){
    const audioElement = document.getElementById("audio");
    const trackListElement = document.getElementById("track-list");
    const currentTrackInfo = document.getElementById("current-track-info")

    fetch("https://de1.api.radio-browser.info/json/stations/topvote/20")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((station) => {
            let track = document.createElement("div");
            track.innerText = station.name;
            track.addEventListener("click", () => {
                audioElement.src = station.url_resolved; 
                audioElement.play();
                currentTrackInfo.innerText = `Now Playing: ${station.name}`; 
            });
            trackListElement.appendChild(track);
            })
            .catch((error) => alert("Error fetching stations:", error));
        });
    });

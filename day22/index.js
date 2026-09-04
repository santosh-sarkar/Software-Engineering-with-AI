const songCardContainer = document.getElementById("song-container");
const artistCardContainer = document.getElementById("artist-container");

const token = 'BQC_LLkOxQDQBIFKd5jAMJxNLYRtzD771p3xu6ClrHNsokDOaLlLfbeImjogTZBGTR4Cy_mLpwXSK8hiDbEi60fw9h_gfO19uOByI5jJCXgO9oeC_Ycxthckz2nmUpjlPNOMizsfmtVglqs8UcO-2S_5lCWMwo5QmSPBwxpPg6GvvscgIW3HvLzNQ7q51XMSYjAXx89Pd7ahWu_jHIM44RELW-ncxFO23ijyGxPcPQOnQ0Q6t9N_BfGpiziNHaG5BxMR8WHwR_6qVoSESw5H7FExHV5lIrGo0T7TYoMoJKrzv_055PtjsDGFSj8zXlL39rlGVhM';
const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      },
    );

    const data = await response.json();
    data?.items?.forEach((track) => {
      trendingSong(track);
      fetchArtistData(track);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function trendingSong(track) {
  const artistNames = track.artists.map((artist) => artist.name).join(", ");
  songCardContainer.innerHTML += `<div class="card">
              <div class="card-img">
                <img src="${track.album.images[0].url}" alt="" />
              </div>
              <h5>${track.name}</h5>
              <p>${artistNames}</p>
              <div class="play-button">
                <i class="fa-solid fa-play"></i>
              </div>
            </div>`;
}

function fetchArtistData(track) {
  artistCardContainer.innerHTML += `<div class="card">
              <div class="artist-img">
                <img src="./songimg.webp" alt="" />
              </div>
              <h5>${track.artists[0].name}</h5>
              <p>${track.artists[0].type}</p>
              <div class="play-button">
                <i class="fa-solid fa-play"></i>
              </div>`;
}

fetchData();

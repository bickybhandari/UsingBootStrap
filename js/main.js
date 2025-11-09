document.addEventListener("DOMContentLoaded", () => {
  const singers = [
    {
    artist: "Adele",
      
      
      song: "Hello",
      details: "Born: May 5, 1988 ",
      hometown: "London"
    },
    {
      artist: "Bruno Mars",
         hometown: "Honolulu",
      details: "Born: Oct 8, 1985",
       song: "Uptown Funk"
    },
    {
      artist: "Taylor Swift",
          hometown: "Pennsylvania",
      details: "Born: Dec 13, 1989",
      song: "Blank Space"
    },
    {
    artist: "Ed Sheeran",
          hometown: "Halifax",
      details: "Born: Feb 17, 1991",
      song: "Shape of You"
    }
  ];

  const tableBody = document.getElementById("singerTableBody");

  singers.forEach(singer => {
    const row = document.createElement("tr");

    const artistCell = document.createElement("td");
    artistCell.textContent = singer.artist;

    

    const detailsCell = document.createElement("td");
    detailsCell.textContent = singer.details;

    const songCell = document.createElement("td");
    songCell.textContent = singer.song;

    const hometownCell = document.createElement("td");
    hometownCell.textContent = singer.hometown;

    row.appendChild(artistCell);
    
    row.appendChild(detailsCell);
    row.appendChild(songCell);
    row.appendChild(hometownCell);

    tableBody.appendChild(row);
  });
});

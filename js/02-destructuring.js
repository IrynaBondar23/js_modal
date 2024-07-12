// const playlist = {
//   name: "My favorite playlist",
//   rating: 5,
//   tracks: ["Track-1", "Track-2"],
//   trackCount: 2,
// };

// const { name, rating, trackCount, author = "user" } = playlist;
// console.log(name);
// console.log(rating);
// console.log(trackCount);
// console.log(author);
// playlist.author = "user";
// console.log(playlist);

//Глибока деструктуризація
const playlist = {
  name: "My favorite playlist",
  rating: 5,
  tracks: { track_1: "Snowmen", track_2: "One way ticket" },
  trackCount: 2,
};

const {
  name,
  rating,
  tracks: { track_1, track_2 },
  trackCount,
} = playlist;

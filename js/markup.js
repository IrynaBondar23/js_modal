const profile = {
  name: "Max",
  tag: "maximilian",
  location: "Jamaica",
  avatar:
    "https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
  stats: {
    followers: 14000,
    views: 16800,
    likes: 365,
  },
};

function makeProfileMarkup(userProfile) {
  const {
    name,
    tag,
    location,
    avatar = "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    stats: { followers, views, likes },
  } = userProfile;
  return `<div>
  <img src="${avatar}" alt="user avatar"/>
  <p>${name}</p>
  <p>Location: ${location}</p>
  <ul>
  <li>Followers: ${followers}</li>
  <li>Views: ${views}</li>
  <li>Likes: ${likes}</li>
  </ul>
  </div>`;
}

const markup = makeProfileMarkup(profile);
document.body.insertAdjacentHTML("beforeend", markup);

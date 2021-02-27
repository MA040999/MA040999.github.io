import React from "react";

const Info = () => {
  return (
    <div className="info">
      <div className="logo">
        <img src="./images/me.png" alt="" />
        <h2>Muhammed Ahmed</h2>
        <p>BS CS - 5D</p>
      </div>
      <div className="links">
        <div className="link">
          <img src="./images/twitch.png" alt="" />
          <a href="https://twitch.com">Twitch</a>
        </div>
        <div className="link">
          <img src="./images/steam.png" alt="" />
          <a href="https://store.steampowered.com">Steam</a>
        </div>
        <div className="link">
          <img src="./images/twitch.png" alt="" />
          <a href="https://twitch.com">Twitch</a>
        </div>
        <div className="link">
          <img src="./images/steam.png" alt="steam-logo" />
          <a href="https://store.steampowered.com">Steam</a>
        </div>
      </div>
      <div className="section">
        <h3>Be The Best.</h3>
        <img src="./images/controller.png" alt="" />
      </div>
    </div>
  );
};

export default Info;

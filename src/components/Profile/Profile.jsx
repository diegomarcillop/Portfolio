import React from "react";
import Social from "../Social/Social";

export default function Profile() {
  return (
    <div style={style.content}>
      <img
        src="img/profile_2.jpg"
        alt="profile"
        className="img-profile"
        style={style.image}
      />
      <h1 style={style.title}>Diego Marcillo</h1>
      <p style={style.text}>Software developer</p>
      <Social />
    </div>
  );
}

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    wordSpacing: "4px",
    borderBottom: "1px solid #9cb4b8",
  },
  image: {
    width: "40vh",
    height: "40vh",
    borderRadius: "100%",
    border: "4px solid #4fc087",
  },
  title: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "4.4vh",
    color: "rgb(46, 46, 46)",
    paddingTop: "10px",
  },
  text: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "3vh",
    fontStyle: "italic",
    paddingBottom: "6px",
    color: "rgb(46, 46, 46)",
  },
};

import React, { Component } from "react";
import "./App.css";
import data from "./gaana.json";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";

class App extends Component {
  state = {
    // i: "",
    defaultValue: false,

    // renderDetailBar,
    // convertSrcToObject,
    // audio,
    shuffle: false,
    // shufflePath.setAttribute("fill", "#c0c0c1") ,
    repeat: false,

    next: false,
    player: false,
    audioQueue: [],
    currentPlaylist: [],
    recentlyPlayed: [],
    queue: [],
    queueOfImagegSrc: [],

    audio: new Audio(),
  };

  componentDidMount = () => {
    console.log(data);

    const cardBox = Object.values(data)[1];

    console.log(cardBox[2].songscards);
    // let indexForHeading = 0;

    // let indexForCards = 0;
    // cardBox.forEach((el) => {
    //   const heading = el.songsbox;

    //   renderHeading(heading, indexForHeading);
    //   indexForHeading += 1;
    //   el.songscards.forEach((el) => {
    //     const songObj = el;

    //     renderCards(songObj, indexForCards);
    //   });
    //   indexForCards += 1;
    // });
  };

  render() {
    return (
      <>
        <Navbar />
        <main>
          <Filter />
          <Card />
        </main>
      </>
    );
  }
}

export default App;

import React from "react";

import Header from "../components/Header";
import GamesHub from "../components/GamesHub";
import UpcomingGames from "../components/UpcomingGames";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Trademark from "../components/Trademark";
import Slideshow from "../components/Slideshow";
import Tabs from "../components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
      <GamesHub />
      <UpcomingGames />
      <Newsletter />
      <Footer />
      <Trademark />
    </div>
  );
}

export default App;

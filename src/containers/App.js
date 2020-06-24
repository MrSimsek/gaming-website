import React from "react";

import Header from "../components/Header";
import GamesHub from "../components/GamesHub";
import UpcomingGames from "../components/UpcomingGames";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Trademark from "../components/Trademark";
import Slideshow from "../components/Slideshow";
import TabsComponent from "../components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <TabsComponent />
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

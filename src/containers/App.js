import React from "react";

import Header from "../components/Header";
import GamesHub from "../components/GamesHub";
import UpcomingGames from "../components/UpcomingGames";

function App() {
  return (
    <div className="App">
      <Header />
      <GamesHub />
      <UpcomingGames />
    </div>
  );
}

export default App;

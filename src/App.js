import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailsPage from "./pages/DetailsPage";
import GlobalStyle from "./styles/GlobalStyle";

class App extends Component {
  state = {
    currentPage: "home",
    selectedCharacterId: null,
  };

  navigateTo = (page, characterId = null) => {
    this.setState({ currentPage: page, selectedCharacterId: characterId });
  };

  render() {
    const { currentPage, selectedCharacterId } = this.state;

    return (
      <div className="container">
        <GlobalStyle />
        <Header />
        {currentPage === "home" ? (
          <HomePage navigateTo={this.navigateTo} />
        ) : (
          <DetailsPage
            navigateTo={this.navigateTo}
            characterId={selectedCharacterId}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;

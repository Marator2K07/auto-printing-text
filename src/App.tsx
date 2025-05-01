import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TypingSymbol from "./components/TypingSymbol";
import { TypingStyle } from "./types";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React??
        </a>
        <TypingSymbol
          typingStyle={TypingStyle.RANDOM}
          steps={22}
          duration={500}
          target="M"
        />
        <TypingSymbol
          typingStyle={TypingStyle.RANDOM}
          steps={22}
          duration={2000}
          target="O"
        />
        <TypingSymbol
          typingStyle={TypingStyle.RANDOM}
          steps={22}
          duration={1000}
          target="O"
        />
        <TypingSymbol
          typingStyle={TypingStyle.RANDOM}
          steps={22}
          duration={1000}
          target="D"
        />
      </header>
    </div>
  );
}

export default App;

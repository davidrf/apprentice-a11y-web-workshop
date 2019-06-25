import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const funFact =
  "Your dog is as smart as a two-year old! Ever wonder why children around this age seem to have a special bond with the family dog? It could be because they speak the same language, roughly 250 words and gestures in fact.";

const A11yComponent = () => {
  const [element1Open, setElement1Open] = useState(false);

  return (
    <div className="buttonRow">
      <h3>
        <button
          aria-controls="region1"
          aria-expanded={element1Open}
          className="doggoFactButton"
          onClick={() => setElement1Open(x => !x)}
          id="button1"
        >
          Doggo Fact!
        </button>
      </h3>
      <div
        aria-labelledby="button1"
        id="region1"
        role="region"
        hidden={!element1Open}
      >
        {funFact}
      </div>
    </div>
  );
};

const NonA11yComponent = () => {
  const [element1Open, setElement1Open] = useState(false);

  return (
    <div className="buttonRow">
      <div className="doggoFactButton" onClick={() => setElement1Open(x => !x)}>
        Doggo Fact!
      </div>
      <div hidden={!element1Open}>{funFact}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="content">
          <h1>a11y web workshop</h1>
          <h2>Step 1: Run an accessibility audit</h2>
          <p>
            One of first things you should do and periodically check as you
            develop an accessible website is use a an accessibility audit tool
            to check for common and obvious mistakes.
          </p>
          <p>
            We recommend downloading the{" "}
            <a
              href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"
              target="_blank"
              rel="noopener noreferrer"
            >
              axe chrome extension
            </a>{" "}
            and running it on this page.{" "}
            <span className="white">Poor contrast text</span>
          </p>
          <p>
            Use the highlight feature in the extension to quickly visually
            identify the problematic elements.
          </p>
          <div className="row">
            <img src={logo} className="App-logo" />
            <form
              onSubmit={e => {
                const { value } = e.target.elements.myField;
                alert(`form submitted ${value}`);
              }}
            >
              <input name="myField" />
              <button>Submit</button>
            </form>
          </div>
          <h2>Step 2: Run through the website using a screenreader</h2>
          <p>
            The best way to ensure that your site is accessible is to go through
            your website using a screenreader.
          </p>
          <ol className="list">
            <li>If you have headphones available, put them on</li>
            <li>
              Next turn on the VoiceOver screen reader by going to System
              Preferences > Accessibility > VoiceOver and the clicking the
              "Enable VoiceOver" checkbox.
            </li>
            <li>
              Navigate into the web content by pressing Control-Option-Shift and
              down arrow
            </li>
            <li>
              Navigate through each web element by pressing Control-Option and
              either left or right arrow
            </li>
            <li>
              To click on an element, press Control-Option-Space when focused on
              it
            </li>
          </ol>
          <p>
            Compare and contrast the following two web elements which are
            visually identical and work functionally the same using a mouse.
            However, one of them is not screen reader friendly. Can you identify
            the inaccessible element and explain why?
          </p>
          <A11yComponent />
          <NonA11yComponent />
        </div>
      </main>
    </div>
  );
}

export default App;

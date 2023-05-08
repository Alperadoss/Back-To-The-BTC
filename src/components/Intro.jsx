import React, { useState, useEffect } from "react";
import barscene from "../assets/barscene.png";

export default function Intro() {
  const [text, setText] = useState("");
  const [fullText, setFulltext] = useState(
    "Joe meets a strange drunk old man at the pub. He's venting about how he broke space-time continuum and can't fix it now. After a couple drinks Joe makes a joke to old man about proving his story with a time travel, back to 2012 so Joe can earn some bitcoin and change his life. And it turns out...   Dr. Emmett Brown was telling the truth!  "
  );
  const [index, setIndex] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);

  return (
    <div className="introScene">
      <img className="barbckgrnd" src={barscene}></img>
      <div className="textbox">
        <h2>2023.01.20</h2>
        <p>{text}</p>
        <a className="button" href="/game">
          <div id="text">
            <h1>
              <span id="offset">GO TO 2012</span>
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
<a className="button" href="/intro">
  <div id="text">
    <h1>
      <span id="offset">START THE GAME</span>
    </h1>
  </div>
</a>;

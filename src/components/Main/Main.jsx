import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    
    setInput(`${promptText}💥`);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" className="user" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Yo,Alpha the Human Bean</span>
              </p>
              <p>How many braincells did you lose today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Skibidi bop bop... but make it existential 🤔"
                  )
                }
              >
                <p>Give me places, but spicy ones 🌶️🔥</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("How do I unlock the forbidden gyat scrolls of level 10? 🔮")
                }
              >
                <p>Unlock the ancient gyat wisdom 📜👹</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Tell me something dumb, I’m ready. 💀")
                }
              >
                <p>Hit me with the dumbest fact 💀🤡</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick("PHP vs JS: Battle of bad decisions? 🥴")
                }}
              >
                <p>PHP vs JS: Who wins the cringe war? 🤡👻</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User" className="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Result" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
              type="text"
              placeholder="Type something chaotic here 🌀👽"
            />
            <div>
              <img className="btn" src={assets.gallery_icon} alt="Image" />
              <img className="btn" src={assets.mic_icon} alt="Mic" />
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={() => {
                  onSent();
                }}
                className="btn"
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              This is just a chaotic clone of the Gemini app developed for
              study purposes. Send dumb prompts, embrace the chaos 🌪️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

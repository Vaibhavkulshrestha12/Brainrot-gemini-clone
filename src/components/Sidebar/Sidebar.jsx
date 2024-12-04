import { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets/";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, sentRecentPrompt, newChat } = useContext(Context);

  const loadPreviousPrompt = async (prompt) => {
    
    sentRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
        />
        <div onClick={() => { newChat(); }} className="new-chat">
          <img className="plus" src={assets.plus_icon} alt="Plus" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent Chaos 🔥</p>
            {prevPrompts.map((item) => {
              
              return (
                <div
                  onClick={() => {
                    loadPreviousPrompt(item);
                  }}
                  className="recent-entry"
                >
                  <img className="message" src={assets.message_icon} alt="Message" />
                  <p>{item.slice(0, 18)}... 💀</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help, I'm stuck in a void! 🌀</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History" />
          {extended ? <p>History of Glorious Failures 🤡</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Setting" />
          {extended ? <p>Setting: Full Chaotic Mode 😵‍💫</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

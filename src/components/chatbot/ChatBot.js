import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { useState } from 'react';
import {createContext} from "react";

const ChatContext = createContext()
const ChatBot = () => {
  const[chatOpen,setChatOpen]=useState(true)
  const [chatDisplay,setChatDisplay] = useState("d-none")
  let chatHandler = ()=>{
  setChatDisplay("d-block")
  setChatOpen(true)
 

  }
  return (
    <>
    <button id='chatButton' type="button" className="btn btn-warning mb-2 fw-semibold rounded-pill px-3" onClick={chatHandler}>Chat</button>
    {
      (chatOpen)?
    <ChatContext.Provider value={[setChatDisplay,setChatOpen]}>
      <div  className={`chatbox ${chatDisplay}`}>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
    </div>   
    </ChatContext.Provider>
    :''
    }
    </>
  );
  
};
export {ChatBot as default, ChatContext}
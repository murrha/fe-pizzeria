import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  let emojiArr = ['✋','✌️','✊']
const handleHello = ()=>{
    const botMessage = createChatBotMessage('Hello. Nice to meet you.')
    addMessageToState(botMessage)
   }

    

    const handleOrder = () =>{
      const botMessage = createChatBotMessage("What's your order number?")
      addMessageToState(botMessage)
    }
   
    const handleMenu = () =>{
      const botMessage = createChatBotMessage("Menu",
      {
        widget:'Menu',
      })
      addMessageToState(botMessage)
    }
    const handlePlayAround = () => {
      
      let  message = createChatBotMessage(
        emojiArr[Math.floor(Math.random()*emojiArr.length)],{
          withAvatar: true,
        }
      )
      addMessageToState(message);
      
      setTimeout(()=>{
        message = createClientMessage(emojiArr[Math.floor(Math.random()*emojiArr.length)])
        addMessageToState(message);
      },2000)
     
    };

   const addMessageToState = (botMessage)=>{
      setState((prev)=>({
        ...prev,
        messages:[...prev.messages,botMessage]
    }))
    }
    

    return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOrder,
            handleMenu,
            handlePlayAround
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
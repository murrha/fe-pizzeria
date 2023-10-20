import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDelivery = () => {
    const botMessage = createChatBotMessage('Great, what address would you like me to deliver to? I just need your name and we will have your order on the way shortly!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const thanksDelivery = () => {
    const botMessage = createChatBotMessage('You are very welcome, enjoy!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const orderDelivery = () => {
    const botMessage = createChatBotMessage('Hello! Let me check the status for you...!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDelivery,
            thanksDelivery,
            orderDelivery,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
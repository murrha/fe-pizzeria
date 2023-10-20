import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('delivery')) {
      actions.handleDelivery();
    }

    if (message.includes('thanks')) {
      actions.thanksDelivery();
    }

    if (message.includes('order')) {
      actions.orderDelivery();
    }
   
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
const ClientMessage = () => {
  const clientMessage = createClientMessage('Track Order')
  return (
    <p>{`${clientMessage}`}</p>
  );
};

export default ClientMessage

import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Pizza Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}.
   Thanks for choosing Full Stack Pizzeria for your order. What can I get started for you today?`)],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FF7676',
    },
    chatButton: {
      backgroundColor: '#FFCD4B',
    },
  },
};

export default config;
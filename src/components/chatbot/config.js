import { createChatBotMessage} from 'react-chatbot-kit';
import GeneralOption from './GeneralOption'
import MenuBot from './MenuBot';


import ChatHeader from './ChatHeader';

let botName = 'PizzaBot'

const config = {
  initialMessages: [createChatBotMessage(`Hello, I'm ${botName}.
  Thanks for choosing Full Stack Pizzeria for your order.`),
  createChatBotMessage(
    "What can I get started for you today?",
    {
      withAvatar: true,
      delay: 500,
      widget: "GeneralOption",
    }),
  
  ],
  customComponents:{
    header: () => <ChatHeader/>
  },
  state:{
    menu:[]
   
  },
  widgets:[
    {
      widgetName:"GeneralOption",
      widgetFunc:(props) => <GeneralOption {...props}/>
      },
    {
      widgetName:'Menu',
      widgetFunc:(props)=><MenuBot {...props}/>,
      mapStateToProps:["menu"]
    },
  
  ],
  botName: "PizzaBot",
  customStyles:{
    botMessageBox:{
        backgroundColor:  '#FF7676',
    },
    chatButton:{
        backgroundColor: '#FFCD4B',
    }
  }

};

export default config;
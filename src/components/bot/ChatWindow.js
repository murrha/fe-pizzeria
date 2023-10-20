import { useState } from "react";

function ChatWindow({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
  
    const handleClick = () => {
      setIsOpen(true);
      setIsMinimized(false);
    }
  
    return (
      <div 
        className={`chat-window ${isMinimized ? 'minimized' : ''} ${isOpen ? 'open' : ''}`}
        onClick={handleClick}  
      >
        {children}
      </div>
    )
  }

  export default ChatWindow;
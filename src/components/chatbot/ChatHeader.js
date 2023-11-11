import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { useContext } from "react";
import { ChatContext } from "./ChatBot";
const ChatHeader = () => {
  const [setChatDisplay,setChatOpen] = useContext(ChatContext)
  
  let minimizeHandler=()=>{
  setChatDisplay("d-none")
  }
  let closeHandler=()=>{
   setChatOpen(false)
  }
    return ( 
        <>
    <div style={{ backgroundColor:" rgb(239,239,239)", padding: "10px", borderRadius: "3px" }}
    className='fw-semibold'>
    Conversation with PizzaBot
     </div>
     <IconButton
      aria-label="close"
      onClick={minimizeHandler}
      sx={{
        position: 'absolute',
        right: 30,
        top: 0,
        color: (theme) => theme.palette.grey[500]}}>
      <MinimizeIcon/>
     </IconButton>
     
    <IconButton
    aria-label="close"
    onClick={closeHandler}
    sx={{
      position: 'absolute',
      right: 3,
      top: 3,
      color: (theme) => theme.palette.grey[500],
    }}
  >
    <CloseIcon />
  </IconButton>
  </>
     );
}
 
export default ChatHeader;
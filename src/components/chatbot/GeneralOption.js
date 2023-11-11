import React from 'react'
import styles from "./Options.module.css";

const GeneralOption = (props) =>{
   
    const options = [
        {
            text:"Track Order",
            handler:props.actionProvider.handleOrder,
            id:1
        },
        {
            text:"Menu",
            handler:props.actionProvider.handleMenu,
            id:2
        },
        {
            text: "Play around",
            handler: props.actionProvider.handlePlayAround,
            id: 3,
          },
    ]
    const optionButtons = options.map((option)=>(
        <button key={option.id} onClick={option.handler} className={styles.option}>
            {option.text}
        </button>)
    )

    return(
        <div>{optionButtons}</div>
    )
}

export default GeneralOption
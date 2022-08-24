import React from "react";
import styles from './style.css';

const Tabs =props =>{
    const{tabe, setTabe}=props;

    const onClickHandler = (thisTabe) => {
        setTabe({...tabe,thistabe:thisTabe});
        
    }

    return(
        <div >
        <div className="main">
        {tabe.message.map((tabe,thisTabe)=>(
            <div onClick={() => onClickHandler(thisTabe)} className="tabs">
                Tab {thisTabe}
            </div>
        )
        )}
        </div>
        <div>
        <div >
                <p className="message">{props.tabe.message[props.tabe.thistabe]}</p>
            </div>
        </div>
        </div>
    )
}
export default Tabs;
import React from "react";
import styles from './style.css';

const Tabs =props =>{
    const{tabe, setTabe}=props;

    const onClickHandler = (e,thisTabe) => {
        setTabe({...tabe,thistabe:thisTabe});
        let t = document.querySelectorAll('.tabs')
        t.forEach((tab)=>{
            if (tab.classList.contains('active')){
                tab.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }

    return(
        <div >
        <div className="main">
        {tabe.message.map((tabe,thisTabe)=>(
            <div onClick={(e) => onClickHandler(e,thisTabe)} className="tabs">
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
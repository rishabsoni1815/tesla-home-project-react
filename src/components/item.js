import React from 'react';
import Button from '../components/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./item.css"

function Item(props){
    return(
        <div className="items" style={{
             backgroundImage:"url("+props.backgroundImg+")"
        }}>

            <div className="item-container">
                <div className="item-text">
                    <p>{props.title}</p>
                    <div className="item-text-des">
                        <p>{props.desc}</p>
                    </div>
                </div>
            <div className="item-lowerThird">
                <div className="item-buttons">
                      <Button imp='primary' text={props.leftBtnTxt} link={props.leftBtnLink}/>
                      {props.twoButtons&&<Button imp='secondary' text={props.rightBtnTxt} link={props.rightBtnLink} />}
                </div>
            {props.first&&
                   <div className="item-expand">
                      <ExpandMoreIcon />
                   </div>
               }
            </div>
        
          </div>
        </div>
    )
}
export default Item;
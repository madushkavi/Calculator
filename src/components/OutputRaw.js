import React from "react";
import './outputraw.css';

const OutputRow = (props) => {
    return (
        <div>
            <input 
                type="text" 
                readOnly 
                style={{ fontSize: props.textSize }} 
                className="screen" 
                value={props.value} 
            />
        </div>
    );
}

export default OutputRow;

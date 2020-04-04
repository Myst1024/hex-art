import React from 'react';
import './Palette.scss'

const Palette = ({ currentColor, setCurrentColor, colorTable}) => {
    return <div className="palette">
        {colorTable.map((color, i) => {
            return <div 
                key={i} 
                className={`color ${currentColor === i ? "selected" : ""}`} 
                style={{backgroundColor: color}} 
                onClick={() => {setCurrentColor(i)}}
            />
        })}
    </div>
}

export default Palette;
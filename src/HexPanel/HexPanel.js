import React, { useState,  } from 'react';
import HexRow from './HexRow';
import './HexPanel.scss';

const HexPanel = ({ currentColor, colorTable }) => {
    const GRID_SIZE = 10;
    
    const [hexGrid, setHexGrid] = useState(Array.from({length: GRID_SIZE},()=> Array.from({length: GRID_SIZE}, () => currentColor)));

    const clickTile = (tileIndex) => {
        let newHexGrid = hexGrid.slice();
        newHexGrid[tileIndex[0]][tileIndex[1]] = currentColor;
        setHexGrid(newHexGrid);
    }

    return (
        <div className="hex-panel">
            {hexGrid.map((row, i) => {
                return (<HexRow key={i} index={i} row={row} colorTable={colorTable} clickTile={clickTile}/>)
            })}
        </div>
    )

    
}

export default HexPanel
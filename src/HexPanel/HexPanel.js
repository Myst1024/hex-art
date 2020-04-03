import React, { useState,  } from 'react';
import HexRow from './HexRow';
import './HexPanel.scss';

function HexPanel() {
    const [hexGrid, setHexGrid] = useState([[0, 0], [1, 0]]);

    return (
        <div className="hex-panel">
            {hexGrid.map((row, i) => {
                return (<HexRow key={i} row={row} />)
            })}
        </div>
    )
}

export default HexPanel
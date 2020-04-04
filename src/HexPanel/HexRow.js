import React from 'react';

function HexRow({ colorTable, row, index, clickTile }) {
    return (
    <div className="hex-row">
        {row.map((tile, i) => {
            return <HexTile key={i} index={[index, i]} color={colorTable[tile]} clickTile={clickTile} />
        })}
    </div>
    )
}

function HexTile({color, index, clickTile}) {
    return( 
        <div className="hex-tile" onClick={() => clickTile(index)}>
        <div className="top" style={{borderBottomColor: color}} />
        <div className="middle" style={{backgroundColor: color}} />
        <div className="bottom" style={{borderTopColor: color}} /> 
        </div>
    )
}

export default HexRow;
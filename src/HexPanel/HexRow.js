import React from 'react';

function HexRow({ row }) {
    return (
    <div className="hex-row">
        {row.map((tile, i) => {
            return <HexTile key={i} color={tile} />
        })}
    </div>
    )
}

function HexTile({tile}) {
    console.log(tile);
    return <div className="hex-tile" color='#'></div>
}

export default HexRow;
import React from "react";

function getTileSprite(type) {
    switch(type) {
        case 0:
            return "grass"
        case 5:
            return "rock"
        case 6:
            return "tree"
    }
}

function MapTile(props) {
    return <div className="tile">0</div>
}

function MapRow(props) {
    return <div className="row">
    {
        props.tiles.map(tile => <MapTile tile={tile} />)

    }
    </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: "relative",
                top: "0px",
                left: "0px",
                width: "875px",
                height: "525px",
                backgroundColor: "green",
                border: "4px solid white"
            }}        
        >
            {
                props.tiles.map( row => <MapRow tiles={row} /> )
            }
        </div>        
    )
}

export default Map;
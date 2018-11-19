import React from "react";
import { connect } from "react-redux";
import sprite from "./sprit.png";
import handleMovement from "./movement"

function Player(props) {
    return (
        <div
            style={{
                position: "absolute",
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url(${sprite})`,
                backgroundPosition: "0 0",
                width: "30px",
                height: "75px"
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(handleMovement(Player));
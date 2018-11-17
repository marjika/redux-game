import React from "react";
import { connect } from "react-redux";
import walkSprite from "./sprite-sheet.png";

function Player(props) {
    return (
        <div
            style={{
                position: "relative",
                top: props.position[1],
                left: props.position[0],
                backgroundImage: 'url(${walkSprite})',
                backgroundPosition: "0 0",
                width: "40px",
                height: "40px"
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.props,
        position: state.position
    }
}

export default connect()(Player);
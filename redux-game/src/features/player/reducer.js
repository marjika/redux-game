const initialState = {
    position: [0, 0],
    spriteLocation: "40px 40px",
    direction: "east"
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MOVE_PLAYER":
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}

export default playerReducer;
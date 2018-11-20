const initialState = {
    position: [80, 80]
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
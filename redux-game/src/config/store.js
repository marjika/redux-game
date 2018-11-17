import { createStore, combineReducers } from "redux";
import playerReducer from "../features/player/reducer";

const rootReducers = combineReducers({
    player: playerReducer
})

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
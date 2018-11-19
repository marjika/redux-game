export default function handleMovement(player) {

    function handleKeydown(e) {
        e.preventDefault();

        switch(e.keyCode) {
            case 37:
            return console.log("WEST");
            case 38:
            return console.log("NORTH");
            case 39:
            return console.log("EAST");
            case 40:
            return console.log("SOUTH");
            default:
            console.log(e.keycode)
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeydown(e);
    });

    return player;
}
import { GameManager } from "./store.js";
import { startLogger } from "./logger.js"

let gameManager =GameManager.getInstance();;
startLogger();
setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        whitePlayerName: 'Alice',
        blackPlayerName: 'john',
        moves: []
    })
}, 5000)        
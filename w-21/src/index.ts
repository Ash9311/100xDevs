import { games } from "./store.js";
import { startLogger } from "./logger.js"

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: 'Alice',
        blackPlayerName: 'john',
        moves: []
    })
}, 5000)        
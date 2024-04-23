import { GameManager } from './store.js';

const gameManager = GameManager.getInstance();
export function startLogger() {
    setInterval(() => {
        gameManager.logState;
    }, 5000)
}


interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[]
}


export class GameManager {
    private static instance: GameManager;
    private games: Game[] = [];

    private constructor() { //pvt constr ensure new instance cannot be created outside

    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGame() {
        return this.games;
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id == gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

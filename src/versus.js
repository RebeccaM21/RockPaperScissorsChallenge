import { Player } from "./player.js";

export default class Versus {
    setup(names, playerClass = Player) {
        this.players = names.map(name => new playerClass(name));
    }

    firstPlayer() {
        return this.players[0];
    }

    secondPlayer() {
        return this.players[1];
    }

    turn() {
        this.secondPlayer().choice();
    }
}
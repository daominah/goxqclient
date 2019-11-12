import "phaser"
import {WelcomeScene} from "./drive/phaser/welcomeScene";
import {GameScene} from "./drive/phaser/gameScene";
import {ScoreScene} from "./drive/phaser/scoreScene";

const config: GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [WelcomeScene, GameScene, ScoreScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#EDEBE9",
    fps: {min: 30}
};

export class StarfallGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
};

window.onload = () => {
    var game = new StarfallGame(config);
};

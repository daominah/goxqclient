import "phaser";

export class GameScene extends Phaser.Scene {
    delta: number;
    lastStarTime: number;
    starsCaught: number;
    starsFallen: number;
    sand: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    // init is called when the scene starts; this function may accept
    // parameters which are passed from other scenesss
    init(/*params: any*/): void {
        this.delta = 500;
        this.lastStarTime = 0;
        this.starsCaught = 0;
        this.starsFallen = 0;
    }

    // preload is called before the scene objects are created, and it contains
    // loading assets; when the scene is restarted, they are not reloaded
    preload(): void {
        // this.load.setBaseURL("http://127.0.0.1:80/goxqclient/");
        this.load.image("star", "src/public/xiangqi/ROOK.png");
        this.load.image("sand", "src/public/chess/KNIGHT.svg");
    }

    // create is called after the assets are loaded and usually contains
    // creation of the main game objects: background, player, enemies, ..
    create(): void {
        this.sand = this.physics.add.staticGroup({
            key: 'sand',
            frameQuantity: 20
        });
        Phaser.Actions.PlaceOnLine(this.sand.getChildren(),
            new Phaser.Geom.Line(20, 580, 820, 580));
        this.sand.refresh();

        this.info = this.add.text(10, 10, '',
            {font: '24px Arial Bold', fill: '#4D4D4D'});
    }

    // update is called every tick and contains the dynamic part of the scene
    // everything that moves, flashes, ..
    update(time: number, delta: number): void {
        console.log("delta time in ms since the last frame:", delta)
        var diff: number = time - this.lastStarTime;
        if (diff > this.delta) {
            this.lastStarTime = time;
            if (this.delta > 100) {
                this.delta -= 100;
            }
            this.emitStar();
        }
        this.info.text =
            this.starsCaught + " caught - " +
            this.starsFallen + " fallen (max 3)";
    }

    private onClick(star: Phaser.Physics.Arcade.Image): () => void {
        return function () {
            star.setTint(0x00ff00);
            star.setVelocity(0, 0);
            this.starsCaught += 1;
            this.time.delayedCall(100, function (star) {
                star.destroy();
            }, [star], this);
        }
    }

    private onFall(star: Phaser.Physics.Arcade.Image): () => void {
        return function () {
            star.setTint(0xff0000);
            this.starsFallen += 1;
            this.time.delayedCall(100, function (star) {
                star.destroy();
                if (this.starsFallen > 2) {
                    this.scene.start("ScoreScene", {starsCaught: this.starsCaught});
                }
            }, [star], this);
        }
    }

    private emitStar(): void {
        var star: Phaser.Physics.Arcade.Image;
        var x = Phaser.Math.Between(25, 775);
        var y = 26;
        star = this.physics.add.image(x, y, "star");

        star.setDisplaySize(50, 50);
        star.setVelocity(Phaser.Math.Between(-350, 350), 200);
        star.setInteractive();

        star.on('pointerdown', this.onClick(star), this);
        this.physics.add.collider(star, this.sand, this.onFall(star), null, this);
    }
};

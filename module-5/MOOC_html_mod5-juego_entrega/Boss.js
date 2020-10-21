/**
 * Jefe final del juego
 */
class Boss extends Opponent {

    /**
    * @param game {Game} La instancia del juego al que pertenece el oponente
    */
    constructor(game) {
        super(game);

        this.speed = BOSS_SPEED;
        this.image.src = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;

        setTimeout(() => super.shoot(), 1000 * 0.5 + getRandomNumber(1000));
    }

    /**
    * Mata al jefe
    */
    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            this.image.src = this.myImageDead;
            this.dead = true;
            this.game.score++;
        }
    }
}
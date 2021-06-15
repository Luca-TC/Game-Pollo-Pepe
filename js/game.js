const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    obstacles: [],

    keys: {
        TOP: 38,
        DOWN: 40,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
    },

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.setDimensions()
        this.start()

    },

    setDimensions() {
        this.width = 1260
        this.height = 960
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {

        this.reset()

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.drawAll()

            this.moveCollision()
            this.player.fell()

            console.log(this.moveCollision())
        }, 1000 / this.FPS)
    },


    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./images/background.png")
        this.player = new Player(this.ctx, "./images/pollo-p.png", 50, 50, this.width, this.height, this.keys)
        this.obstacles = [//remeber the limits of other screens
            new Obstacles(this.ctx, 100, 50, 850, 560, this.height),
            new Obstacles(this.ctx, 100, 50, 345, 550, this.height),
            new Obstacles(this.ctx, 100, 50, 650, 650, this.height),
            new Obstacles(this.ctx, 200, 50, 350, 750, this.height),
            new Obstacles(this.ctx, 200, 50, 675, 250, this.height)]
    },
    drawAll() {
        this.background.draw()
        this.player.draw()
        this.obstacles.forEach(obs => obs.draw())


    },
    moveCollision() {
        return this.obstacles.some((obs, idx) => {
            if (this.player.playerPos.X + this.player.playerWidth > obs.ObsPos.x &&
                this.player.playerPos.Y + this.player.playerHeight > obs.ObsPos.y &&
                this.player.playerPos.Y < obs.ObsPos.y + obs.ObsHeight &&
                this.player.playerPos.X < obs.ObsPos.x + obs.ObsWidth) { //SI HAY COLISION

                if (this.player.playerPos.Y <= obs.ObsPos.y + obs.ObsHeight) {
                    this.player.playerPosY0 = obs.ObsPos.y - this.player.playerHeight
                    console.log('da con la pies en la parte superiorrrr')

                } else if ((this.player.playerPos.Y + this.player.playerHeight) <= obs.ObsPos.y) {
                    this.player.playerPos.Y = obs.ObsPos.y - this.player.playerHeight
                    console.log('da con la cabeza en la parte inferior')

                } else {
                    this.player.fell()
                }

            }
        })
    }




    // clear() {
    //     this.ctx.clearRect(0, 0, this.width, this.height)
    // },

}

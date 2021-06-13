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
        this.move()

    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {

        this.reset()

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++


            this.drawAll()


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

    // clear() {
    //     this.ctx.clearRect(0, 0, this.width, this.height)
    // },
    move() {
        this.player.moveRight()
        this.player.moveLeft()
        this.player.moveDown()
        this.player.moveUp()
    }
}
/*Decirle al pixel que en todos los ejes X e Y
creza +1 o decrezca -1 si va hacia adelante o hacia atras, arriba o abajo.*/
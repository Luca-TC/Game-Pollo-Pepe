class Wheat {
    constructor(ctx, imgSource, wheatW, wheatH, wheatPosX0, wheatPosY0, gameWidth, gameHeight) {
        this.ctx = ctx
        this.image = new Image()
        this.image.src = imgSource
        this.height = gameHeight
        this.width = gameWidth
        this.wheatWidth = wheatW
        this.wheatHeight = wheatH
        this.wheatPos = { X: wheatPosX0, Y: Math.random() * wheatPosY0 }
        this.velX = 2
    }
    draw() {
        this.ctx.drawImage(this.image, this.wheatPos.X, this.wheatPos.Y, this.wheatWidth, this.wheatHeight)
        this.move()
    }
    move() {
        if (this.wheatPos.X <= -this.width) {
            this.wheatPos.X = 0;
        }
        this.wheatPos.X -= this.velX;

    }
}
class Food {
    constructor(ctx, imgSource, foodW, foodH, foodPosX0, foodPosY0, gameWidth, gameHeight) {
        this.ctx = ctx
        this.image = new Image()
        this.image.src = imgSource
        this.height = gameHeight
        this.width = gameWidth
        this.foodWidth = foodW
        this.foodHeight = foodH
        this.foodPos = { X: Math.random() * foodPosX0, Y: Math.random() * foodPosY0 }
    }
    draw() {
        this.ctx.drawImage(this.image, this.foodPos.X, this.foodPos.Y, this.foodWidth, this.foodHeight)
    }
}
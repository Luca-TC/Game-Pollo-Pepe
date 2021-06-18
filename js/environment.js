class Obstacles {
    constructor(ctx, ObsW, ObsH, ObsPosX, ObsPosY, gameHeight) {
        this.ctx = ctx

        this.height = gameHeight
        this.width = 50

        this.ObsWidth = (Math.random() * ObsW) + 75
        this.ObsHeight = ObsH

        this.ObsPos = { x: ObsPosX, y: (Math.random() * (ObsPosY-20)) + (this.height / 2) }


        this.velX = 2.5;
    }
    draw() {
        this.ctx.fillStyle = '#F2871C'
        this.ctx.fillRect(this.ObsPos.x, this.ObsPos.y, this.ObsWidth, this.ObsHeight)
        this.move()
    }
    move() {
        if (this.ObsPos.x <= -this.width) {
            this.ObsPos.x = 0;
        }
        this.ObsPos.x -= this.velX;
    }
}

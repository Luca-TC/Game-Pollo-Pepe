class Obstacles {
    constructor(ctx, ObsW, ObsH, ObsPosX, ObsPosY, gameHeight) {
        this.ctx = ctx

        this.height = gameHeight
        this.width = 50

        this.ObsWidth = ObsW
        this.ObsHeight = ObsH

        this.ObsPos = { x: ObsPosX, y: ObsPosY }
        // console.log(this.ObsPosY)
        console.log(ObsH, this.ObsPos.x)
            ;
    }
    draw() {
        this.ctx.fillStyle = '#F2871C'
        this.ctx.fillRect(this.ObsPos.x, this.ObsPos.y, this.ObsWidth, this.ObsHeight)

    }
}
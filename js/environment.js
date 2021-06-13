class Obstacles {
    constructor(ctx, ObsW, ObsH, ObsPosX, ObsPosY, gameHeight) {
        this.ctx = ctx

        this.height = gameHeight
        this.width = 50

        this.ObsWidth = ObsW
        this.ObsHeight = ObsH

        this.ObsPos = { x: ObsPosX, y: ObsPosY }
        // console.log(this.ObsPosY)
        console.log(ObsH,this.ObsPos.x)
            ;
    }
    draw() {
        this.ctx.fillStyle = '#F2871C'
        this.ctx.fillRect(this.ObsPos.x, this.ObsPos.y, this.ObsWidth, this.ObsHeight)
       
    }
}
 // this.move()
        // var rect1 = { x: 5, y: 5, width: 50, height: 50 }
        // var rect2 = { x: 20, y: 10, width: 10, height: 10 }

        // if (rect1.x < rect2.x + rect2.width &&
        //     rect1.x + rect1.width > rect2.x &&
        //     rect1.y < rect2.y + rect2.height &&
        //     rect1.height + rect1.y > rect2.y) {
        //     // ¡colision detectada!
        // }

        // // reemplazando los valores =>

        // if (5 < 30 &&
        //     55 > 20 &&
        //     5 < 20 &&
        //     55 > 10) {
        //     // ¡colision detecteda!
        // }
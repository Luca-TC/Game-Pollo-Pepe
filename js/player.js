class Player {
    constructor(ctx, imgSource, playerW, playerH, gameWidth, gameHeight, Keys) {
        this.ctx = ctx
        this.image = new Image()
        this.image.src = imgSource

        this.height = gameHeight
        this.width = gameWidth

        this.playerWidth = playerW
        this.playerHeight = playerH

        this.playerPosX0 = 50
        this.playerPosY0 = this.height - this.playerHeight - 20

        this.playerPos = { X: this.playerPosX0, Y: this.playerPosY0 }

        this.vel = { X: 20, Y: 20 }

        this.gravity = 0.4
        this.keys = Keys
        this.setListeners()
    }
    draw() {
        this.ctx.drawImage(this.image, this.playerPos.X, this.playerPos.Y, this.playerWidth, this.playerHeight)

    }

    moveRight() {
        this.playerPos.X += this.vel.X

        if ((this.playerPos.X + this.playerWidth) >= this.width) {
            this.playerPos.X = this.width - this.playerWidth//puse los limites

        }
    }
    moveLeft() {
        this.playerPos.X -= this.vel.X
        if ((this.playerPos.X - this.playerWidth) <= 0) {
            this.playerPos.X = 0
        }
    }

    moveUp() {

        if (this.playerPos.Y > 0) {
            this.vel.Y = -12.5// da reglar
            this.playerPos.Y += this.vel.Y
        }
        if (this.playerPos.Y <= 0) {
            //   console.log('rebota')
            // console.log(this.vel.Y)
            this.vel.Y *= -1
            this.playerPos.Y += this.vel.Y
        }


    }
    fell() {

        if (this.playerPos.Y < this.playerPosY0) {
            this.vel.Y += this.gravity
            this.playerPos.Y += this.vel.Y // funciona, pero rebota mal.
        }
    }




    setListeners() {

        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.TOP:
                    this.moveUp()

                    break;
                case this.keys.RIGHT:
                    this.moveRight()

                    break;
                case this.keys.LEFT:
                    this.moveLeft()
                    //  console.log('left')
                    break;


            }
        });
    }


}

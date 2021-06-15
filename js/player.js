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

        console.log(playerH)

        this.playerPos = { X: this.playerPosX0, Y: this.playerPosY0 }

        this.vel = { X: 10, Y: 10 }

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
        console.log(this.playerPos.X)//puse los limites
        if ((this.playerPos.X - this.playerWidth) <= 0) {
            this.playerPos.X = 0
            console.log(this.playerPos.X)//puse los limites
        }
    }

    moveUp() {
        this.vel.Y = -20
        this.playerPos.Y += this.vel.Y
        //limite superior
        if ((this.playerPos.Y - this.playerHeight) <= 0) {
            this.playerPosY0//puse los limites
            console.log('jump')
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
                    console.log('left')
                    break;

                // case this.keys.DOWN:
                //     this.moveDown()
                //     console.log('down')
                //     break;

            }
        });
    }


}

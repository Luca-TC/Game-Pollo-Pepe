class Player {
    constructor(ctx, imgSource, playerW, playerH, gameWidth, gameHeight, Keys) {
        this.ctx = ctx
        this.image = new Image()
        this.image.src = imgSource

        this.height = gameHeight
        this.width = gameWidth

        this.playerWidth = playerW
        this.playerHeight = playerH

        this.playerPosX0 =  this.playerWidth + 20
        this.playerPosY0 = this.height - this.playerHeight - 20
        // console.log(this.playerPosY)
        console.log(playerH)
        //he tenido que poner las posiciones 'zero'
        this.playerPos={X : this.playerPosX0,Y : this.playerPosY0}
        this.velY = 30
        this.velX = 30// nuevo cambio del domingo, 
        //podemos poner una variable por cambiar la velocidad con que se mueve el pollo
        this.gravity = 0.4
        this.keys = Keys
        this.setListeners()
    }
    draw() {
        this.ctx.drawImage(this.image, this.playerPos.X, this.playerPos.Y, this.playerWidth, this.playerHeight)

    }


    moveRight() {
        this.playerPos.X += this.velX
        if ((this.playerPos.X + this.playerWidth) >= this.width) {
            this.playerPos.X = this.width - this.playerWidth//puse los limites
        }
    }
    // moveRightUp() {
    //     this.playerPosX += 3
    //     this.playerPosY -= 3
    //     }
    moveLeft() {
        this.playerPos.X -= this.velX
        console.log(this.playerPos.X)//puse los limites
        if ((this.playerPos.X - this.playerWidth) <= 0) {
            this.playerPos.X = 0
            console.log(this.playerPos.X)//puse los limites
        }
    }
    // moveLeftUp() {
    //     this.playerPosX += 3
    //     this.playerPosY -= 3
    // }
    moveUp() {
        this.playerPos.Y -= this.velY
        if ((this.playerPos.Y - this.playerHeight) <= 0) {
            this.playerPos.Y = 0//puse los limites
        }
    }
    moveDown() {
        this.playerPos.Y += this.velY
        if ((this.playerPos.Y + this.playerHeight) >= this.height) {
            this.playerPos.Y = this.height - this.playerHeight //puse los limites
        }
    }
    jump() {
        this.playerPos.Y -= 40
        if (this.playerPos.Y >= this.posY0 /*&& this.playerPosY == 40*/) {
            this.playerPos.Y -= 40;
            this.velY -= 8;
        }
    }
    setListeners() {

        document.addEventListener("keydown", e => {
            // console.log(e);
            // console.log(this.keys);
            switch (e.keyCode) {
                case this.keys.TOP:
                    this.moveUp()
                    console.log('top');
                    console.log(this.playerPosY);
                    break;
                // case this.keys.TOP&&this.keys.RIGHT:
                //     this.moveRightUp()
                //     break;
                case this.keys.RIGHT:
                    this.moveRight()
                    console.log('right');
                    break;
                case this.keys.LEFT:
                    this.moveLeft()
                    console.log('left')
                    break;
                // case this.keys.TOP && this.keys.LEFT:
                //     this.moveLeftUp()
                //     break;
                case this.keys.DOWN:
                    this.moveDown()
                    console.log('down')
                    break;
                case this.keys.SPACE:
                    this.jump();
                    console.log('JUMP')
                    break;
            }
        });
    }


}

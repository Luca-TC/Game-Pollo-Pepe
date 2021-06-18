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
    food: [],
    wheat: [],
    score: 0,
    life: 5,

    keys: {
        TOP: 38,
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

            this.clear()
            this.drawAll()
            this.player.fell()
            this.returnToFloor()
            this.moveCollision()
            this.cornCollision()
            this.wheatCollision()


        }, 1000 / this.FPS)
    },


    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./images/background.png")
        this.player = new Player(this.ctx, "./images/polloPepe2.png", 100, 100, this.width, this.height, this.keys)
        this.obstacles = []
        this.food = []
        this.wheat = []
        // console.log(this.wheat)
    },
    drawAll() {


        this.background.draw()
        this.player.draw()
        this.generateObstacles()
        this.obstacles.forEach(obs => obs.draw())
        this.clearObstacles()
        this.generateFood()
        this.food.forEach(foo => foo.draw())
        this.clearFood()
        this.generateWheat()
        this.wheat.forEach(wee => wee.draw())
        this.text2()
        this.text()
        this.gameWin()
        this.gameOver()


       



    },
    moveCollision() {
        return this.obstacles.some((obs, idx) => {
            if (this.player.playerPos.X + this.player.playerWidth > obs.ObsPos.x && // 
                this.player.playerPos.Y + this.player.playerHeight > obs.ObsPos.y && // los pies a la base superior
                this.player.playerPos.Y < obs.ObsPos.y + obs.ObsHeight && // si pega desde abajo
                this.player.playerPos.X < obs.ObsPos.x + obs.ObsWidth) { //SI HAY COLISION 

                //pies por debajo > lado de abajo
                if (this.player.playerPos.Y + this.player.playerHeight > obs.ObsPos.y + obs.ObsHeight) {
                    this.player.vel.Y *= -1
                    //     console.log('da con la cabeza en la parte inferior')
                }
                //pies por encima < lado de arriba
                else if (this.player.playerPos.Y < obs.ObsPos.y) {
                    this.player.playerPosY0 = obs.ObsPos.y - this.player.playerHeight
                    this.player.playerPos.Y = obs.ObsPos.y - this.player.playerHeight
                   
                    //      console.log('da con los pies en la plataforma')
                }
            }
        })
    },
    cornCollision() {
        return this.food.some((foo, idx) => {
            if (this.player.playerPos.X + this.player.playerWidth > foo.foodPos.X && // 
                this.player.playerPos.Y + this.player.playerHeight > foo.foodPos.Y && // los pies a la base superior
                this.player.playerPos.Y < foo.foodPos.Y + foo.foodHeight && // si pega desde abajo
                this.player.playerPos.X < foo.foodPos.X + foo.foodWidth) { //SI HAY COLISION 
                //console.log(foo)
                this.food.splice(idx, 1)
                this.player.playerWidth *= 1.5
                this.player.playerHeight *= 1.5
                this.score++
                if (this.score % 5 === 0) { this.life++ }
                console.log('score', this.score);
                console.log('life', this.life);

            }

        })
    },
    wheatCollision() {
        return this.wheat.some((whe, idx) => {
            if (this.player.playerPos.X + this.player.playerWidth > whe.wheatPos.X && // 
                this.player.playerPos.Y + this.player.playerHeight > whe.wheatPos.Y && // los pies a la base superior
                this.player.playerPos.Y < whe.wheatPos.Y + whe.wheatHeight && // si pega desde abajo
                this.player.playerPos.X < whe.wheatPos.X + whe.wheatWidth) { //SI HAY COLISION 
                //  console.log(whe)
                this.wheat.splice(idx, 1)
                this.player.playerWidth /= 1.5
                this.player.playerHeight /= 1.5
                this.life--
                if (this.life === 0) { console.log('game over') }// a los 3 muere // 45segundos
                console.log('score', this.score);
            }

        })
    },


    returnToFloor() {
        this.obstacles.forEach(obs => {
            if (obs.ObsPos.x + obs.ObsWidth < this.player.playerPos.X || obs.ObsPos.x > this.player.playerPos.X + this.player.playerWidth) {
                this.player.playerPosY0 = this.canvas.height - this.player.playerHeight - 20
            }
        })
    },
    generateObstacles() {
        if (this.framesCounter % 120 === 0) {
            this.obstacles.push(new Obstacles(this.ctx, 125, 15, this.width, 900, this.height))
        }
    },

    generateFood() {
        if (this.framesCounter % 190 === 0) {
            //console.log(this.framesCounter)
            this.food.push(new Food(this.ctx, './images/corn.png', 40, 66, 860, 800, this.width, this.height))
            //console.log(this.food)
        }
    },
    generateWheat() {
        if (this.framesCounter % 180 === 0) {
            this.wheat.push(new Wheat(this.ctx, './images/grain.png', 40, 66, this.width, 800, this.width, this.height))
            // console.log(this.wheat)
        }
    },
    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.ObsPos.x >= 0)
    },
    clearFood() {

        if (this.framesCounter % 300 === 0) {
            //  console.log('borrar')
            this.food.shift()
        }
        /**cada 10 secundos splice el primero que has hecho */
    },
    clearWheat() {
        this.wheat = this.wheat.filter(whe => whe.wheatPos.X >= 0)
    },

    text() {
       
        this.ctx.font = "30px Indie Flower";
        this.ctx.fillText("Score: " + this.score, 10, 50);
        this.ctx.fillStyle = 'red'


    },
    text2() {
       
        this.ctx.font = "30px Indie Flower";
        this.ctx.fillText("Life: " + this.life, 1170, 50);
        this.ctx.fillStyle = 'red'

    },
    gameWin() {
        if (this.score == 12) {
            this.ctx.font = "125px Indie Flower"
            this.ctx.fillStyle = '#db248c'
            this.ctx.fillText("MAMÁ ESTÁ AQUÍ!", 175, 480);

            clearInterval(this.interval)
        }
    },


    gameOver() {
        if (this.life <= 0) {
            this.ctx.font = "125px Indie Flower"
            this.ctx.fillStyle = 'red'
            this.ctx.fillText("GAME OVER", 350, 480);

            clearInterval(this.interval)
        }
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

}






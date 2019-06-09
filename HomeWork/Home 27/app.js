class BallGame {
    constructor(container, canvas) {
        this.container = container;
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
        this.onContainerMouseDown = this.onContainerMouseDown.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            direction: 'right',
            radius: 10,
            ballColor: 'black',
            ballX: 20,
            ballY: 20
        }
        this.init();
    }

    init() {
        this.animate();
        this.bindEventListener();
    }

    bindEventListener() {
        document.addEventListener('keydown', this.onDocumentKeyDown);
        this.container.addEventListener('input', this.onContainerMouseDown);
    }

    onContainerMouseDown(e) {
        if(e.target.id === 'rangeInput') {
            this.changeBallSize(e.target);
        } else if(e.target.id === 'colorInput') {
            this.changeBallColor(e.target);
        }
    }

    changeBallColor(el) {
        this.state.ballColor = el.value;
    }

    changeBallSize(el) {
        this.state.radius = Number(el.value);
    }

    onDocumentKeyDown(e) {
        if(e.keyCode == 38) {
            this.state.direction = 'top';
        } else if(e.keyCode == 39) {
            this.state.direction = 'right';
        } else if(e.keyCode == 40) {
            this.state.direction = 'bottom';
        } else if(e.keyCode == 37) {
            this.state.direction = 'left';
        }
    }
    
    animate() {
        setTimeout(this.tick, 5);
    }
    
    checkСollisions() {
        if(this.state.ballX + this.state.radius >= this.width) {
            this.state.direction = 'left';
        } else if(this.state.ballX - this.state.radius <= 0) {
            this.state.direction = 'right';
        } else if(this.state.ballY + this.state.radius >= this.height) {
            this.state.direction = 'top';
        } else if(this.state.ballY - this.state.radius <= 0) {
            this.state.direction = 'bottom';
        }
    }

    renderBall() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        this.ctx.arc(this.state.ballX, this.state.ballY, this.state.radius, 0, Math.PI*2, true);
        this.ctx.fillStyle = this.state.ballColor;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

    tick() {
        this.checkСollisions();
        this.renderBall();
        switch(this.state.direction) {
            case 'right':
                this.state.ballX++;
                break;
            case 'bottom':
                this.state.ballY++;
                break;
            case 'left':
                this.state.ballX--;
                break;
            case 'top':
                this.state.ballY--;
                break;                 
        }
        this.animate();
    }
}

const ballGame = new BallGame(
        document.getElementById('ballGameContainer'),
        document.getElementById('ballGameCanvas')
    );
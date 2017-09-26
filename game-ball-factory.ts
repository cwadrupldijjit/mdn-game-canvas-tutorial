/// <reference path="./simple-canvas-game.d.ts" />

declare interface IBall {
    id: number;
    center: ICoordinate;
    vector: ICoordinate;
    radius: number;
    color: string;
    
    setColor(color: string): IBall;
    setRadius(length: number): IBall;
    setVector(newVector: ICoordinate): IBall;
    setCenter(coordinate: ICoordinate): IBall;
    
    calculateCollision(canvas: HTMLCanvasElement, paddles: IPaddle[]): boolean;
    move(): IBall;
    draw(context: CanvasRenderingContext2D): IBall;
};

const ballFactory = (function() {
    let currentId = 1;
    return function  ballFactory(center?: ICoordinate, vector?: ICoordinate, radius?: number, color?: string): IBall {
        let ball = {
            id: currentId++,
            center,
            vector,
            radius,
            color,
            setColor,
            setRadius,
            setVector,
            setCenter,
            calculateCollision,
            move,
            draw
        };
        
        return ball;
    }
    
    function setColor(color: string): IBall {
        this.color = color;
        return this;
    }
    
    function setRadius(length: number): IBall {
        this.radius = length;
        return this;
    }
    
    function setVector(newVector: ICoordinate): IBall {
        this.vector = newVector;
        return this;
    }
    
    function setCenter(coordinate: ICoordinate): IBall {
        this.center = coordinate;
        return this;
    }
    
    function calculateCollision(canvas: HTMLCanvasElement, paddles: IPaddle[]): boolean {
        let relevantPaddle = paddles.find(paddle => {
            return this.center.y + this.vector.y >
                    canvas.height - (canvas.height - paddle.y) - this.radius;
        });
        
        if (this.center.y + this.vector.y < this.radius ||
            (relevantPaddle &&
                this.center.x > relevantPaddle.x &&
                this.center.x < relevantPaddle.x + relevantPaddle.width)
        ) {
            this.vector.y = -this.vector.y;
        } else if (this.center.y + this.vector.y > canvas.height + this.radius) {
            return false;
        }
        if (this.center.x + this.vector.x < this.radius ||
            this.center.x + this.vector.x > canvas.width - this.radius
        ) {
            this.vector.x = -this.vector.x;
        }
        
        return true;
    }
    
    function move(): IBall {
        this.center = {
            x: this.center.x + this.vector.x,
            y: this.center.y + this.vector.y
        };
        return this;
    }
    
    function draw(context: CanvasRenderingContext2D):IBall {
        context.beginPath();
        context.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();
        return this;
    }
})();
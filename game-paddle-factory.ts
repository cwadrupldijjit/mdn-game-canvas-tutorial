/// <reference path="./simple-canvas-game.d.ts" />

declare interface IPaddle {
    height: number;
    width: number;
    x: number;
    y: number;
    moveLeft: boolean;
    moveRight: boolean;
    
    setDimensions(dimensions: ICoordinate): IPaddle;
    setPosition(dimensions: ICoordinate): IPaddle;
    
    draw(context: CanvasRenderingContext2D): IPaddle;
    destroy(): IPaddle;
    
    addMovementListener(): IPaddle;
    removeMovementListener(): IPaddle;
    movementHandler(event: KeyboardEvent): void;
    stopMovementHandler(event: KeyboardEvent): void;
}

const paddleFactory = (function() {
    return function paddleFactory(): IPaddle {
        let paddle = <IPaddle> {
            setDimensions,
            setPosition,
            draw,
            destroy,
            moveLeft: false,
            moveRight: false,
            addMovementListener: listenForPaddleMovement,
            removeMovementListener: stopListenForPaddleMovement,
        };
        
        paddle.movementHandler = paddleMovementHandler.bind(paddle);
        paddle.stopMovementHandler = paddleStopMovementHandler.bind(paddle);
        
        paddle.addMovementListener();
        
        return paddle;
    };
    
    function setDimensions(dimensions: ICoordinate): IPaddle {
        (<IPaddle> this).width = dimensions.x;
        (<IPaddle> this).height = dimensions.y;
        
        return this;
    }
    
    function setPosition(coordinate: ICoordinate): IPaddle {
        (<IPaddle> this).x = coordinate.x;
        (<IPaddle> this).y = coordinate.y;
        
        return this;
    }
    
    function listenForPaddleMovement() {
        document.addEventListener('keydown', this.movementHandler, false);
        document.addEventListener('keyup', this.stopMovementHandler, false);
        return this;
    }
    
    function stopListenForPaddleMovement() {
        document.removeEventListener('keydown', this.movementHandler, false);
        document.removeEventListener('keyup', this.stopMovementHandler, false);
        return this;
    }
    
    function paddleMovementHandler(event: KeyboardEvent) {
        if (39 == event.keyCode || 39 == event.which) {
            this.moveRight = true;
        } else if (37 == event.keyCode || 37 == event.which) {
            this.moveLeft = true;
        }
    }
    
    function paddleStopMovementHandler(event: KeyboardEvent) {
        if (39 == event.keyCode || 39 == event.which) {
            this.moveRight = false;
        } else if (37 == event.keyCode || 37 == event.which) {
            this.moveLeft = false;
        }
    }
    
    function destroy(): IPaddle {
        (<IPaddle> this).removeMovementListener();
        return this;
    }
    
    function draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#0095dd';
        context.fill();
        context.closePath();
    }
})();
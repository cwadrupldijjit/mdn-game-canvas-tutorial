/// <reference path="./simple-canvas-game.d.ts" />

declare interface IGame {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    
    ballRadius: number;
    paddleHeight: number;
    paddleWidth: number;
    paddleBottomPadding: number;
    paddles: IPaddle[];
    rounds: IRound[];
    balls: IBall[];
    
    updateCoordinates():IGame;
    drawBalls(): IGame;
    drawPaddles(): IGame;
    registerEventListeners(): IGame;
    deregisterEventListeners(): IGame;
    keyDownHandler(event: KeyboardEvent): void;
    keyUpHandler(event: KeyboardEvent): void;
    play(): void;
    showGameOver(): void;
}

(function startGame() {
    'use strict';
    
    let game = CanvasGameFactory('#canvas');
    
    game.balls = [
        ballFactory()
            .setCenter({ x: game.canvas.height - 34, y: game.canvas.width / 2 })
            .setVector({ x: 2, y: -2 })
            .setColor('red')
            .setRadius(5)
    ];
    
    game.paddleHeight = 10;
    game.paddleWidth = 75;
    game.paddleBottomPadding = 10;
    
    let firstPaddle = paddleFactory()
        .setDimensions({ x: game.paddleWidth, y: game.paddleHeight })
        .setPosition({
            x: (game.canvas.width - game.paddleWidth) / 2,
            y: game.canvas.height - game.paddleHeight - game.paddleBottomPadding
        });
    
    game.paddles = [ firstPaddle ];
    
    game.play = function() {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
        
        game.updateCoordinates()
            .drawBalls()
            .drawPaddles();
        
        game.balls.forEach(ball => ball.move());
    };
    
    game.updateCoordinates = function() {
        let areBallsStillLive = (<IGame> this).balls
                .map(ball => ball.calculateCollision(this.canvas, this.paddles));
        
        for (let i = areBallsStillLive.length - 1; i >= 0; i--) {
            if (!areBallsStillLive[i]) {
                (<IGame> this).balls.splice(i, 1);
            }
        }
        
        let liveBalls = areBallsStillLive.filter(ballStatus => ballStatus);
        
        if (!liveBalls.length) {
            this.endDraw();
            this.startDraw(this.showGameOver);
            this.endDraw();
            return this;
        }
        if (this.paddles[0].moveRight && this.paddles[this.paddles.length - 1].x < this.canvas.width - this.paddleWidth) {
            (<IGame> this).paddles.forEach(paddle => paddle.setPosition({ x: paddle.x + 7, y: paddle.y }));
        } else if (this.paddles[0].moveLeft && this.paddles[0].x > 0) {
            (<IGame> this).paddles.forEach(paddle => paddle.setPosition({ x: paddle.x - 7, y: paddle.y }));
        }
        return this;
    };
    
    game.drawBalls = function() {
        (<IGame> this).balls.forEach(ball => {
            ball.draw(this.context);
        });
        return this;
    };
    
    game.drawPaddles = function() {
        (<IGame> this).paddles.forEach(paddle => {
            paddle.draw(this.context);
        })
        return this;
    };
    
    game.showGameOver = function() {
        game.context.font = '48px Arial';
        game.context.fillStyle = 'black';
        game.context.textAlign = 'center';
        game.context.fillText('Game Over!', (game.canvas.width) / 2, game.canvas.height / 2);
    };
    
    
    /**
     * Let the game begin!
     */
    
    game.startDraw(game.play);
})();
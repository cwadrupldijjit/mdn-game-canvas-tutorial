/// <reference path="./simple-canvas-game.d.ts" />

declare interface IRound {
    brickPadding: number;
    staggerBrickField: boolean;
    brickWidth: number;
    brickHeight: number;
    ballStartVector: ICoordinate;
    paddleColor: string;
    ballColor: string;
    
}

const RoundFactory = (() => {
    
    return function RoundFactory(): IRound {
        let round = <IRound> {};
        
        const roundPrototype = {
            
        };
        
        return round;
    };
})();
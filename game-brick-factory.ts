/// <reference path="./simple-canvas-game.d.ts" />

declare interface IBrick {
    width: number;
    height: number;
    padding: number;
    offsetTop: number;
    offsetLeft: number;
    color: string;
    
    setColor(color: string): IBrick;
    setToughness(factor: number): IBrick;
}

const brickFactory = (() => {
    
    return function brickFactory(): IBrick {
        let brick = <IBrick> {};
        
        return brick;
    };
})();
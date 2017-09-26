/// <reference path="simple-canvas-game.d.ts" />

const CanvasGameFactory = (function() {
    let continuePainting = false;
    let animationFrameId;
    
    const canvasGamePrototype = <ICanvasGamePrototype> {
        startDraw(drawFunc) {
            continuePainting = true;
            paintCanvas(drawFunc);
        },
        endDraw() {
            continuePainting = false;
            cancelAnimationFrame(animationFrameId);
        }
    };
    
    return function CanvasGameFactory(canvasSelector: string): IGame {
        'use strict';
        
        let game = <IGame> Object.create(canvasGamePrototype);
        
        game.canvas = <HTMLCanvasElement> document.querySelector(canvasSelector);
        game.context = game.canvas.getContext('2d');
        
        return game;
    };
    
    function paintCanvas(drawFunc, time?) {
        drawFunc();
        
        if (continuePainting) {
            animationFrameId = requestAnimationFrame(paintCanvas.bind(null, drawFunc));
        }
    }
})();

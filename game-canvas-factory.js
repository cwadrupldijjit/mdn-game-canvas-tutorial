/// <reference path="simple-canvas-game.d.ts" />
const CanvasGameFactory = (function () {
    let continuePainting = false;
    let animationFrameId;
    const canvasGamePrototype = {
        startDraw(drawFunc) {
            continuePainting = true;
            paintCanvas(drawFunc);
        },
        endDraw() {
            continuePainting = false;
            cancelAnimationFrame(animationFrameId);
        }
    };
    return function CanvasGameFactory(canvasSelector) {
        'use strict';
        let game = Object.create(canvasGamePrototype);
        game.canvas = document.querySelector(canvasSelector);
        game.context = game.canvas.getContext('2d');
        return game;
    };
    function paintCanvas(drawFunc, time) {
        drawFunc();
        if (continuePainting) {
            animationFrameId = requestAnimationFrame(paintCanvas.bind(null, drawFunc));
        }
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1jYW52YXMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUtY2FudmFzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBRWhELE1BQU0saUJBQWlCLEdBQUcsQ0FBQztJQUN2QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUM3QixJQUFJLGdCQUFnQixDQUFDO0lBRXJCLE1BQU0sbUJBQW1CLEdBQTBCO1FBQy9DLFNBQVMsQ0FBQyxRQUFRO1lBQ2QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsT0FBTztZQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUN6QixvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDSixDQUFDO0lBRUYsTUFBTSxDQUFDLDJCQUEyQixjQUFzQjtRQUNwRCxZQUFZLENBQUM7UUFFYixJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYscUJBQXFCLFFBQVEsRUFBRSxJQUFLO1FBQ2hDLFFBQVEsRUFBRSxDQUFDO1FBRVgsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=
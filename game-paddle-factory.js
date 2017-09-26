/// <reference path="./simple-canvas-game.d.ts" />
const paddleFactory = (function () {
    return function paddleFactory() {
        let paddle = {
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
    function setDimensions(dimensions) {
        this.width = dimensions.x;
        this.height = dimensions.y;
        return this;
    }
    function setPosition(coordinate) {
        this.x = coordinate.x;
        this.y = coordinate.y;
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
    function paddleMovementHandler(event) {
        if (39 == event.keyCode || 39 == event.which) {
            this.moveRight = true;
        }
        else if (37 == event.keyCode || 37 == event.which) {
            this.moveLeft = true;
        }
    }
    function paddleStopMovementHandler(event) {
        if (39 == event.keyCode || 39 == event.which) {
            this.moveRight = false;
        }
        else if (37 == event.keyCode || 37 == event.which) {
            this.moveLeft = false;
        }
    }
    function destroy() {
        this.removeMovementListener();
        return this;
    }
    function draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#0095dd';
        context.fill();
        context.closePath();
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1wYWRkbGUtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUtcGFkZGxlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBc0JsRCxNQUFNLGFBQWEsR0FBRyxDQUFDO0lBQ25CLE1BQU0sQ0FBQztRQUNILElBQUksTUFBTSxHQUFhO1lBQ25CLGFBQWE7WUFDYixXQUFXO1lBQ1gsSUFBSTtZQUNKLE9BQU87WUFDUCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLG1CQUFtQixFQUFFLHVCQUF1QjtZQUM1QyxzQkFBc0IsRUFBRSwyQkFBMkI7U0FDdEQsQ0FBQztRQUVGLE1BQU0sQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUM7SUFFRix1QkFBdUIsVUFBdUI7UUFDL0IsSUFBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxQkFBcUIsVUFBdUI7UUFDN0IsSUFBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUVsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDtRQUNJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDtRQUNJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBK0IsS0FBb0I7UUFDL0MsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQW1DLEtBQW9CO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUVEO1FBQ2UsSUFBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsY0FBYyxPQUFpQztRQUMzQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=
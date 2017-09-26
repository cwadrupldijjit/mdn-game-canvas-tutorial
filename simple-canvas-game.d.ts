declare interface ICanvasGamePrototype {
    startDraw(drawFunc: Function): void;
    endDraw(): void;
}

declare interface IGame extends ICanvasGamePrototype {
    [key: string]: any;
}

declare interface ICoordinate {
    x: number;
    y: number;
}

declare interface IRoundPrototype {
    
}

declare interface IRound extends IRoundPrototype {
    rowCount: number;
    columnCount: number;
    alternateRows: boolean;
    parTime?: number;
    parScore?: number;
}
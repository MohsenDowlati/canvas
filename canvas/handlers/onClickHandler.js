
import { drawPoints } from '../drawPoints.js';
import { isInside } from '../isInside.js';

function alreadyAtPoint(points, mousePos) {
    return points.find((point, index) => {
        const rect = {
            x: point.x - 2.5,
            y: point.y - 2.5,
            width: 8,
            height: 8
        };

        return isInside(mousePos, rect);
    });
}

export function onAddPointHandler(mousePos, points, context) {
    if (alreadyAtPoint(points, mousePos)) {
        return points;
    }

    const {x, y} = mousePos;

    console.log(`Add point Click at X: ${x} Y: ${y}`, 10, 20);

    points.push({
        x,
        y,
        highlight: false,
    });

    drawPoints(context, points);

    return points;
}
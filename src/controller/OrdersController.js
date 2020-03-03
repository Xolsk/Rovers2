
class Orders {


    static forward(position, orientation, map) {

        switch (orientation) {
            case "N": {
                position[1]++;
                break;
            }
            case "E": {
                position[0]++;
                break;
            }
            case "S": {
                position[1]--;
                break;
            }
            case "W": {
                position[0]--;
                break;
            }
        }
        const condition = Orders.checkObstacle(position, map)
        return { condition, position };


    }

    static left(orientation) {

        const compass = ["N", "E", "S", "W"];
        let currentOrientation = compass.indexOf(orientation);
        currentOrientation--;
        if (currentOrientation < 0) { currentOrientation = 3 };
        return compass[currentOrientation]

    }

    static right(orientation) {

        const compass = ["N", "E", "S", "W"];
        let currentOrientation = compass.indexOf(orientation);
        currentOrientation++;
        if (currentOrientation > 3) { currentOrientation = 0 };
        return compass[currentOrientation]

    }

    static checkObstacle(position, map) {

        const occupiedCoordinateX = map.obstacles.filter(element => element[0] == position[0]);
        const occupiedCoordinateXY = occupiedCoordinateX.filter(element => element[1] == position[1]);
        if (occupiedCoordinateXY.length > 0 ||
            position[0] > map.size[0] ||
            position[1] > map.size[0] ||
            position[0] < 0 ||
            position[1] < 0
        ) {
           return "crash";
        }
        return "ok"
    }
}

export default Orders;
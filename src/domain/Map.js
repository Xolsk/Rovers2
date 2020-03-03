class Map {

    constructor(size) {

        this.size = size;
        this.obstacles = [];
    }

    deploy(coordinatesArray) {
      
        const occupiedCoordinateX = this.obstacles.filter(element=>element[0]==coordinatesArray[0]);
        const occupiedCoordinateXY= occupiedCoordinateX.filter(element=>element[1]==coordinatesArray[1]);
        if (coordinatesArray[0] > this.size[0] ||
            coordinatesArray[1] > this.size[1] ||
            occupiedCoordinateXY!=-[]) {
            
            return false
        }
        else return true
    }

    addObstacle(newObstacle) {

        this.obstacles.push(newObstacle);
      
     };

}

export default Map;
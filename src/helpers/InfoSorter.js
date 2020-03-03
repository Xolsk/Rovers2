class InfoSorter {

    static getCoordinates(value, useForCoords) {

        const splitInput = value.split("-")
        splitInput.splice(2);
        const stringyCoordinates = splitInput.filter(index => Number(index) >= 0);
        let numberCoordinates = [];

        if (stringyCoordinates.length == 2) {
            for (let i = 0; i < 2; i++) {
                numberCoordinates.push(Number(stringyCoordinates[i]));
            }
            console.log(numberCoordinates);
        }
        else if (useForCoords == "for the Map") {
            numberCoordinates = [50, 50];
        }
        else {
            numberCoordinates = [0, 0];
        }

        return numberCoordinates;
    }


    static getRoverList(ordersArray) {

        ordersArray.splice(0, 1);
        let rovers = []
        let initialPosition = undefined;
        let initialOrientation = undefined;

        for (let i = 0; i < ordersArray.length; i++) {
            if (i % 2 == 0) {
                initialPosition = InfoSorter.getCoordinates(ordersArray[i], "for deployment");
                initialOrientation = InfoSorter.getOrientation(ordersArray[i]);
            }
            else {

                const orders = ordersArray[i].toUpperCase();
                rovers.push({ initialPosition, initialOrientation, orders });
            }
        }

        return (rovers);
    }

    static getOrientation(string) {

        const splitInput = string.split("-");
        const orientation = splitInput[splitInput.length - 1];

        if (orientation.toUpperCase() === "N" ||
            orientation.toUpperCase() === "E" ||
            orientation.toUpperCase() === "S" ||
            orientation.toUpperCase() === "W"
        ) {
            return orientation.toUpperCase();
        }
        else return ("N");

    }

}

export default InfoSorter;
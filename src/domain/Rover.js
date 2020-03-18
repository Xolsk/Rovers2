import AbsVehicle from "./AbsVehicle.js";
import Orders from "../controller/OrdersController.js"

class Rover extends AbsVehicle {

    constructor(position, orientation, orders) {

        super("Rover", position, orientation, orders);
    }

    setBackupOrder(){
        this.backupOrder.push(this.position[0]);
        this.backupOrder.push(this.position[1]);
    }
    move(map) {

        for (let i = 0; i < this.orders.length; i++) {
            const order = this.orders[i];
            let status = undefined;

            switch (order) {

                case "M": {
                    this.setBackupOrder();
                    status = Orders.forward(this.position, this.orientation, map);
                    if (status.condition == "crash") {
                        i = this.orders.length;
                        this.status="HAD TO STOP";
                        this.position=this.backupOrder;
                        break;
                    }
                    else {
                        this.position = status.position;
                        this.backupOrder.splice(0);
                        break;
                    }
                }
                case "L": {
                    this.orientation = Orders.left(this.orientation); break;
                }
                case "R": {
                    this.orientation = Orders.right(this.orientation); break;
                }
            }
        }
    }

}

export default Rover;

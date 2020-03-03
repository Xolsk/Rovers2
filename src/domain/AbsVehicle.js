class AbsVehicle{

constructor (type, position,orientation,orders){

    if (this.constructor===AbsVehicle){
        throw new TypeError("Abstract class cannot be instatiated");
    }
    this.type=type
    this.position=position;
    this.orientation=orientation;
    this.orders=orders;
    this.status="OK";
    this.backupOrder=[];

    

}

};

export default AbsVehicle;
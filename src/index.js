import Rover from "./domain/Rover.js";
import Map from "./domain/Map.js";
import FileManager from "./helpers/FileManager.js";
import InfoSorter from "./helpers/InfoSorter.js"
import NodeGenerator from "./helpers/NodeGenerator.js";

window.onload = () => {
    document.getElementById("fileInput").addEventListener("change", ()=>{loadInfo()})
    document.getElementById("readBtn").addEventListener('click', () => { runSystem() });

};

async function loadInfo(){

    let file = document.getElementById('fileInput');
    let roverList = [];
    if (file.files.length > 0) {

        const fileData = await FileManager.processFile(file.files[0]);
        const mapSize = InfoSorter.getCoordinates(fileData[0], "for the map");
        const rovers = InfoSorter.getRoverList(fileData);
        NodeGenerator.drawInitialInfo(mapSize, rovers)
    }
    else alert("No file chosen!");


}

async function runSystem() {

    let file = document.getElementById('fileInput');
    let roverList = [];
    if (file.files.length > 0) {

        const fileData = await FileManager.processFile(file.files[0]);
        const mapSize = InfoSorter.getCoordinates(fileData[0], "for the map");
        const map = new Map(mapSize);
        const rovers = InfoSorter.getRoverList(fileData);
       
        for (let i = 0; i < rovers.length; i++) {
            roverList.push(new Rover(rovers[i].initialPosition, rovers[i].initialOrientation, rovers[i].orders));
        }
        for (let i = 0; i < roverList.length; i++) {
            const validDeployment = map.deploy(roverList[i].position);
            if (validDeployment) {
                roverList[i].move(map);
                map.addObstacle(roverList[i].position);
               
            }
            else{
                roverList[i].status="INVALID DEPLOYMENT";
            }     
        }
        NodeGenerator.printFinalData(roverList)
        console.log(roverList);
    }
    else { alert("No file chosen!") };
}















class NodeGenerator {

    static drawInitialInfo  (map,rovers)  {

        NodeGenerator.clearNodes();
        const node = document.getElementById("mapContainer");
        const html = `
                     <div>X AXIS:${map[0]}</div>
                     <div>Y AXIS:${map[1]}</div>
                    `;
        node.insertAdjacentHTML('beforeEnd', html);
        const node2 = document.getElementById("input");
        for (let i = 0; i < rovers.length; i++) {
            const html2 = `<h2>Rover Number ${i} INPUT</h2>
            <div class="line">X AXIS:${rovers[i].initialPosition[0]}</div>
            <divclass="line">Y AXIS:${rovers[i].initialPosition[1]}</div>
            <div class="line">ORIENTATION:${rovers[i].initialOrientation}</div>
            <div class="line">ORDERS:${rovers[i].orders}</div>
           `;
            node2.insertAdjacentHTML('beforeEnd', html2);
        }
    }
    static clearNodes  ()  {
        const node = document.getElementById("mapContainer");
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
       const  node2 = document.getElementById("input");
        while (node2.firstChild) {
            node2.removeChild(node2.firstChild);
        }
        const node3 = document.getElementById("output");
        while (node3.firstChild) {
            node3.removeChild(node3.firstChild);
        }
    }

    static printFinalData  (data)  {

        const node = document.getElementById("output");
        for ( let i = 0; i < data.length; i++) {
            const html = `<h2>Rover Number ${i} OUTPUT</h2>
            <div class="line">X AXIS:${data[i].position[0]}</div>
            <div class="line">Y AXIS:${data[i].position[1]}</div>
            <div class="line">ORIENTATION:${data[i].orientation}</div>
            <div class="line">STATUS:${data[i].status}</div>
           `;
            node.insertAdjacentHTML('beforeEnd', html);
        }

    }
}





export default NodeGenerator
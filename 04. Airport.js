function solve(dataRows) {
    let airport = new Map();
    let townStatistics = new Map();  // array from 2 elements
    let townPlanes = new Map();         // Avoid duplicate because use set

    for(let dataRow of dataRows){
        let [planeId, town, passengersCount, action]
            = dataRow.split(/\s+/g);
        passengersCount = Number(passengersCount);

        if(action === "land"){
            if(airport.has(planeId)){
                continue;
            }else {
                airport.set(planeId, "land")
            }

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0, 0]);     //defaulte value
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townStatistics.get(town)[0] += passengersCount;
            townPlanes.get(town).add(planeId);
        }else {
            if(airport.has(planeId)){
                airport.delete(planeId);
            }else {
                continue;
            }

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0, 0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townStatistics.get(town)[1] += passengersCount;
            townPlanes.get(town).add(planeId);
        }
    }

    let sortedAirport = Array.from(airport.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));
    console.log('Planes left:');
    for(let [planeId] of sortedAirport){
        console.log(`- ${planeId}`);
    }
    let sortedTowns = [...townStatistics.entries()]
        .sort(sortTown);
    for (let [town,townStatistics] of sortedTowns){
        console.log(town);
        console.log(`Arrivals: ${townStatistics[0]}`)
        console.log(`Departures: ${townStatistics[1]}`)
        let sortedPlane = [...townPlanes.get(town).values()]         // with values return only one element
            .sort((a, b) => a.localeCompare(b));
        console.log('Planes:');
        for (let planeId of sortedPlane){
            console.log(`-- ${planeId}`);
        }
    }

    function sortTown(a, b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCriteria = bArrivals - aArrivals ;

        if(firstCriteria != 0){
            return firstCriteria;
        }else {
            return a[0].localeCompare(b[0]);
        }

    }
}

solve([
     "Boeing474 Madrid 300 land",
       "AirForceOne WashingtonDC 178 land",
       "Airbus London 265 depart",
       "ATR72 WashingtonDC 272 land",
       "ATR72 Madrid 135 depart"
]);
solve([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
])
function cappyJuice(array) {
    let juices = new Map();
    let juicesOutput = new Map();

    for (let data of array) {
        let currentJuice = data.split(' => ');
        let [name, quantity] = [currentJuice[0], Number(currentJuice[1])];
        if(!juices.has(name)){
            juices.set(name, quantity)
        }else {
            let moreQuantity = juices.get(name);
            juices.set(name, quantity + moreQuantity);
        }

        if(juices.get(name) >= 1000){
            if(!juicesOutput.has(name)){
                juicesOutput.set(name, juices.get(name));
            }else {
                let more = quantity + juicesOutput.get(name);
                juicesOutput.set(name, more);
            }
        }
    }
    for (let [name, quantity] of juicesOutput.entries()) {
        console.log(`${name} => ${Math.floor(quantity / 1000)}`);
    }
}